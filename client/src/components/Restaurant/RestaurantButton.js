import React from 'react'
import {Link} from 'react-router-dom'
//import styles from '../Home.module.css';

export default function RestaurantButton(props) {
    console.log("Rbutton")
    console.log(props)
    return (
        <Link to={"restaurant/" + props._id}>
            <button>
                <h2 style={{fontSize: "30px"}}>
                {props.name}
                </h2>
                
                <h3 style={{fontSize: "13px"}}>
                {props.description}
                </h3>

                <h4 style={{fontSize: "10px"}}>
                {props.pricelevel}
                </h4>
                
            </button>
        </Link>
        
    )
}
