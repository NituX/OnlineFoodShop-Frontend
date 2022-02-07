import React from 'react'
import {Link} from 'react-router-dom'
//import styles from '../Home.module.css';

export default function RestaurantButton(props) {
    console.log("Rbutton")
    console.log(props)
    return (
        <Link to={"restaurant/" + props._id}>
            <button>
                <h2>
                {props.name}
                </h2>
                
                <h3>
                {props.description}
                </h3>

                <span>
                {props.pricelevel}
                </span>
                
            </button>
        </Link>
        
    )
}
