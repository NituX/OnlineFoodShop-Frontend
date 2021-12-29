import React from 'react'
import styles from './Home.module.css';
import {Link} from 'react-router-dom';
import RestaurantButton from './RestaurantButton';

export default function (props) {
    return (
        <div className={styles.container}>
                {
                props.items.map(item => <RestaurantButton key={item.id} {...item} />)
                }

            {/*<Link to="restaurant">
                <button> Restaurant </button>
    </Link>*/}
        </div>
    )
}
