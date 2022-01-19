import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuItem from './MenuItem';
import MenuList from './MenuList';
import styles from './Restaurant.module.css';

export default function Restaurant(props) {

    const [searchString, setSearhcString] = useState("");

    const result = useParams();
    console.log(result);

    const restaurant = props.items.find(item => item.id === result.restaurantId);

    return (
        <div className={styles.container}>
            <div>
                <h2> {restaurant.restaurantName} </h2>
            </div>

            <div className={styles.filter}>
                Filter <input type="text" onChange={(event) => setSearhcString(event.target.value)} />
            </div>


            <div className={styles.menulist}>
                <MenuList
                items = {restaurant.menu.filter((item) => item.itemName.toLowerCase().includes(searchString.toLowerCase()))}
                />
            </div>
        </div>
    )
}
