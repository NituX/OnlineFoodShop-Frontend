import React, { useContext } from 'react';
import { CartContext } from '../../Contexts/CartContexts'
import { UserAuthContext } from '../../Contexts/Contexts'
import CartItem from './CartItem.js';
import styles from './CartView.module.css';

const Cartview = () => {

    const { userJWT } = useContext(UserAuthContext)
    const { cartItems } = useContext(CartContext);

    const totalPrice = cartItems.reduce((a, b) => a + b.qty * b.price, 0);

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
            <div>
                <h3>
                    totalPrice: {totalPrice} €
                </h3>
            </div>
        </div>
    );
}

export default Cartview;
