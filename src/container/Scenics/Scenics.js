import {useState, useRef, useCallback} from 'react'
import Scenic from '../../components/Scenic/Scenic'
import CityScenics from '../CityScenics/CityScenics'
import {Route} from 'react-router-dom'
import fetchAll from '../../functions/fetchAll'

const Scenics = (props) => {

    const [skip, setSkip] = useState(0)

    const {data, hasMore, loading} = fetchAll(skip)
  
    console.log(props.match)

    const observer = useRef()
    const lastElementRef = useCallback(node => {
        if(loading) return
        if(observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setSkip(skipState => skipState + 30)
            }
        })
        if(node) observer.current.observe(node)
    },[loading, hasMore])



    let posts = data.map((post, index) => {
        if(data.length === index + 1) {
            return <Scenic 
            ref={lastElementRef}
            key={post.ID}
            name={post.Name}
            description={post.Description}
            otherDescription={post.DescriptionDetail}/>
        } else {
            return <Scenic 
            key={post.ID}
            name={post.Name}
            description={post.Description}
            otherDescription={post.DescriptionDetail}/>
        }
    })

    return (
    <>
      <section>
        {posts}
      </section>
      <Route path={props.match.url + '/:city'} exact component={CityScenics}/>
    </>
    )
}

export default Scenics
