import classes from './Scenic.module.css'
import {forwardRef} from 'react'

const scenic = forwardRef((props, ref) => {
    return (
        <article ref={ref} className={classes.Article}>
            <h2>{props.name}</h2>
            {props.description ? (
                <p>{props.description}</p>
            ): <p>{props.otherDescription}</p>  }  
        </article>
    )
})

export default scenic