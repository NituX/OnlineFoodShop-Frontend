import React, { useState } from 'react'
import styles from './Home.module.css';
import RestaurantList from './Restaurant/RestaurantList';

export default function Home(props) {

    const [searchString, setSearhcString] = useState("");

    //const [filteredList] = useState();

    const [items] = useState(props.items);



    return (
        <div className={styles.container}>

            <div>
                Search: <input type="text" onChange={(event) => setSearhcString(event.target.value)} />
            </div>

            <RestaurantList
                items={items.filter((item) => item.restaurantName.toLowerCase().includes(searchString.toLowerCase()))}
            />
        </div>
    )
}
