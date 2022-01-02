import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../Home.module.css';

export default function RestaurantButton(props) {
    return (
        <Link to={props.id}>
            <button>
                {props.restaurantName}
            </button>
        </Link>
        
    )
}
