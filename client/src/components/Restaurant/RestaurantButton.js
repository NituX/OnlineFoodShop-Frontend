import React from 'react'
import {Link} from 'react-router-dom'
//import styles from '../Home.module.css';

export default function RestaurantButton(props) {
    console.log("Rbutton")
    console.log(props)
    return (
        <Link to={"restaurant/" + props._id}>
            <button>
                {props.name}
            </button>
        </Link>
        
    )
}
