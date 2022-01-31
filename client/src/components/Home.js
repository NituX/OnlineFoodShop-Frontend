import axios from 'axios';
import React, { useEffect, useState } from 'react';
//import {Link, useNavigate} from 'react-router-dom'
import styles from './Home.module.css';
import RestaurantList from './Restaurant/RestaurantList';
import Constants from '../Constants.json';

export default function Home({restaurants}) {

    const [searchString, setSearhcString] = useState("");

    return (
        <div className={styles.container}>

            <div>
                Search: <input type="text" onChange={(event) => setSearhcString(event.target.value)} />
            </div>

            <RestaurantList
             restaurants={restaurants.filter((item) => item.name.toLowerCase().includes(searchString.toLowerCase()))}
             />
            
            
        </div>
    )
}
