import React, { useState, useContext } from 'react'
import styles from './MenuItem.module.css'
import {UserAuthContext} from '../../Contexts'

export default function Menu(props) {

    const userAuthCtxValue = useContext(UserAuthContext);

    let loggedInRoutes=<></>

        if(userAuthCtxValue.jwt) {
            loggedInRoutes=
            <>
            <button>Add to Cart</button>
            </>
        }
    
    
    

    const [itemCount, setItemCount] = useState("1");

    const handleChange = (event) => {
        setItemCount(event.target.value)
    }

    return (
        <dl className={styles.container}>





            <div className={styles.image}>
                asd
            </div>



            <dt>
                {
                    props.itemName
                }
                <dd>
                    '{
                        props.description
                    }'
                </dd>
            </dt>


            <div className={styles.itemPrice}>
                {
                    props.price
                }
                €
            </div>

            <div className={styles.addToCart}>
                {loggedInRoutes}
            </div>

        </dl>


    )
}
