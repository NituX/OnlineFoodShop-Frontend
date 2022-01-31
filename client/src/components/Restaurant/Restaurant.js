import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuList from './MenuList';
import styles from './Restaurant.module.css';

export default function Restaurant({restaurants}) {

    const [searchString, setSearhcString] = useState("");

    const result = useParams();
    console.log(result);

    const currentRestaurant = restaurants.find(item => item._id.includes(result._id))

    console.log(restaurants)
    console.log(currentRestaurant);


    return (
        <div className={styles.container}>
            <div>
                <h2> {currentRestaurant.name} </h2>
            </div>

            <div className={styles.filter}>
                Filter <input type="text" onChange={(event) => setSearhcString(event.target.value)} />
            </div>


            <div className={styles.menulist}>
                <MenuList menu={currentRestaurant.menu}/>
            </div>
        </div>
    )
}
