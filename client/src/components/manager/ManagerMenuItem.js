import axios from 'axios';
import React from 'react';
import styles from './managerDB.module.css'
import Constants from '../../Constants.json';
import {useParams, useNavigate} from 'react-router-dom'

export default function ManagerMenuItem(props) {

    const navigate = useNavigate();
    const params = useParams();

    async function deleteMenuItem(event) {
        event.preventDefault();

        try {
            await axios.delete(
                Constants.API_ADDRESS + '/restaurant/menus/' + params._id + '/' + props._id
            )
            navigate('/manager', {replace: true})
            window.location.reload();
        } catch (error) {
            console.log(error)
        }

    }

  return(
    <div className={styles.menuItem}>
        <h4> {props.name} </h4>
        <h5> {props.category} </h5>
        <h5> {props.description} </h5>
        <h5> {props.price}  </h5>

        <button onClick={deleteMenuItem}> Delete </button>
    </div>
  );
}
