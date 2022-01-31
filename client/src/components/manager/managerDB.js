import React from 'react';
import InfoForm from './infoForm';
import styles from './managerDB.module.css'
import {Link, Outlet} from 'react-router-dom'

export default function ManagerDB(props) {
console.log(props)

    return (
        <div className= {styles.container}>
            <div className= {styles.restaurantList}>
                {props.restaurants.map(i =>
                    <Link to={i._id}>
                        <div className={styles.restaurantListItem}> {i.name} </div>
                    </Link>
                    )}
            </div>

            <div>
            <Outlet />
            </div>
            
        </div>
    )

}
