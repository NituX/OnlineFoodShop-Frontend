import React from 'react';
import { useParams } from 'react-router-dom';
import MenuList from './MenuList';
import styles from './Restaurant.module.css';

export default function Restaurant({restaurants}) {

    const result = useParams();
    console.log(result);

    const currentRestaurant = restaurants.find(item => item._id.includes(result._id))

    console.log(restaurants)
    console.log(currentRestaurant);


    return (
        <div className={styles.container}>
            <div className={styles.restaurantInfo}>
                <h2> {currentRestaurant.name} </h2>
                <h3> Open: {currentRestaurant.openingHours} </h3>
                <h3> {currentRestaurant.description} </h3>
                <h5> Address: {currentRestaurant.address + " " + currentRestaurant.zipcode + " " + currentRestaurant.city}</h5>
                <h5> Phone: {currentRestaurant.phone} </h5>
            </div>

            
            <div className={styles.menulist}>
                <MenuList menu={currentRestaurant.menu}/>
            </div>
        </div>
    )
}
