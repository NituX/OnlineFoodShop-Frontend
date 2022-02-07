import React, { useContext } from 'react';
import { CartContext } from '../../Contexts/CartContexts'
import { UserAuthContext } from '../../Contexts/Contexts'
import CartItem from './CartItem.js';
import styles from './CartView.module.css';

const Cartview = () => {

    const { userJWT } = useContext(UserAuthContext)
    const { cartItems } = useContext(CartContext);

    return (

        <div className={styles.container}>

            <h3>
                Cart Items:
            </h3>
            <div>
                {cartItems.length === 0 && (
                    <div className={styles.empty}>
                        Cart is empty
                    </div>
                )}


                {cartItems.length !== 0 && (
                    <div>
                        {cartItems.map((item) => <CartItem key={item._id} {...item} />)}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cartview;

/*
<div>
                {cartItems.length === 0 && <div> Cart is empty </div>}
                

                {cartItems.length !== 0 && (
                    <div>
                        {cartItems.map((item) => <CartItem key={item._id} {...item} />)}
                    </div>
                )}
            </div>
*/