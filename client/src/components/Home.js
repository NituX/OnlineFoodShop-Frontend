import React, { useState } from 'react'
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import RestaurantButton from './Restaurant/RestaurantButton';
import RestaurantList from './Restaurant/RestaurantList';

export default function (props) {

    const [searchString, setSearhcString] = useState("");

    const [filteredList] = useState();

    const [items] = useState(props.items);



    return (
        <div className={styles.container}>

            <div>
                Search: <input type="text" onChange={(event) => setSearhcString(event.target.value)} />
            </div>

            <RestaurantList
                items={items.filter((item) => item.restaurantName.toLowerCase().includes(searchString.toLowerCase()))}
            />
            {/*<Link to="restaurant">
                <button> Restaurant </button>
    </Link>*/}
        </div>
    )
}
