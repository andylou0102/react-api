import Form from './Form'
import classes from './Navbar.module.css'
import {Link} from 'react-router-dom'

const navbar = (props) => {
    return (
        <nav className={classes.Nav}>
            <button><Link to='/ScenicSpot' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} >Show All</Link></button>
            <Form myCity={props.myCity} chooseCity={props.chooseCity}/>
        </nav> 
    )
}

export default navbar