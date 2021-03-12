import {useState} from 'react'
import Form from './Form'
import classes from './Navbar.module.css'
import {Link} from 'react-router-dom'



const Navbar = (props) => {

    const [city, setCity] = useState('')
  
    const citySelect = (e) => {
      setCity(e.target.value )
    }

    const submitHandler = (city) => {
        props.history.push('/ScenicSpot/' + city)
    }

    return (
        <nav className={classes.Nav}>
            <button><Link to='/ScenicSpot' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} >Show All</Link></button>
            <Form myCity={city} chooseCity={citySelect} submitHandler={submitHandler}/>
        </nav> 
    )
}

export default Navbar