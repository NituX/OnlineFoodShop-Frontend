import React from 'react';
import {useParams, Outlet, useNavigate, Link} from 'react-router-dom'
import CreateMenuItem from './CreateMenuItem';
import ManagerMenuItem from './ManagerMenuItem';
import styles from './managerDB.module.css'

export default function ManageMenu({restaurants}) {

  console.log(restaurants)

  const params = useParams();
  const currentRestaurant = restaurants.find(i => i._id.includes(params._id))

  console.log(currentRestaurant.menu)
  return(
    <div>
    <div className={styles.menuContainer}>
      {
      currentRestaurant.menu.map(i => <ManagerMenuItem key={i._id} {...i}/>)
      }
    </div>
    <div>
    <Link to = 'add'> <button> Add Menu Item </button> </Link>
    </div>
    
    <Outlet />
    </div>
  )
}