import React, {useState, useEffect} from 'react';
import Constants from '../../Constants.json'
import axios from 'axios';
import styles from './managerDB.module.css'
import {Link, Outlet} from 'react-router-dom'

export default function ManagerDB() {

    useEffect(() => {
        getRestaurants()
      }, []);

const [restaurants, setRestaurants] = useState([]);

const getRestaurants = async () => {
    try {
      const response = await axios.get(
      Constants.API_ADDRESS + '/restaurant'
      )
      console.log(response.data.restaurants)
      setRestaurants(response.data.restaurants)
    } catch (error) {
        console.log(error)
      }
  }

    return (
        <div className= {styles.container}>
            <div className= {styles.restaurantList}>
                <Link to = 'new'>
                    Create new restaurant
                </Link>

                {restaurants.map(i =>
                    <Link to={i._id} key={i._id}>
                        <div className={styles.restaurantListItem} key = {i._id}> {i.name} </div>
                    </Link>
                    )}
            </div>

            <div>
            <Outlet />
            </div>
            
        </div>
    )

}
