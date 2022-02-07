import React, { useState, useContext } from 'react'
import styles from './MenuItem.module.css'
import { UserAuthContext } from '../../Contexts/Contexts'
import { CartContext } from '../../Contexts/CartContexts';

export default function Menu(props) {

    const userAuthCtxValue = useContext(UserAuthContext);
    const { onAdd } = useContext(CartContext);
    const menuItem = props;

    let loggedInRoutes = <></>

    if (userAuthCtxValue.jwt) {
        loggedInRoutes =
            <>
                <button onClick={() => handleAddToCart(menuItem)}>Add to Cart</button>
            </>
    }

    const handleAddToCart = (menuItem) => {
        onAdd(menuItem)
    }

    return (
        <dl className={styles.container}>

            <div className={styles.image}>

            </div>

            <div>
                <dt>
                    {
                        menuItem.name
                    }
                </dt>

                <dd>
                    '{
                        menuItem.description
                    }'
                </dd>
            </div>




            <div className={styles.price}>
                {
                    menuItem.price
                }
                €
            </div>

            <div className={styles.addToCart}>
                {loggedInRoutes}
            </div>

        </dl>
    )
}
