import {useEffect, useState, useRef, useCallback} from 'react'
import axios from 'axios'
import Scenic from '../../components/Scenic/Scenic'


const Cityscenics = (props) => {
    const [skip, setSkip] = useState(0)
  
    const [data, setData] = useState([])
    const [hasMore, setHasMore] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      axios({
        method:'GET',
        url: `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${props.match.params.city}`,
        params: { $top: 30, $skip: skip, $format: 'JSON'}
        }).then(res => {
            setData(prevState => {
            return [...prevState, ...res.data] 
          })
            setHasMore(res.data.length > 0)
            setLoading(false)
      })
    },[skip]) 

    useEffect(() => {
      setSkip(0)
      axios({
        method:'GET',
        url: `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${props.match.params.city}`,
        params: { $top: 30, $skip: skip, $format: 'JSON'}
        }).then(res => {
            setData([...res.data]) 
            setHasMore(res.data.length > 0)
            setLoading(false)
        })
      },[props.match.params.city])
      
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
      <section>
        {posts}
        <div style={{font: '24px bold', textAlign: 'center'}}>{ loading && 'Loading...'}</div>
      </section>
    )
}

export default Cityscenics