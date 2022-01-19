import React from 'react';
import CartItem from './CartItem.js';
import styles from './CartView.module.css';

const Cartview = () => {
    return (
        <div className={styles.container}>
            
        <ul>
            <li>
                <CartItem/>
            </li>
        </ul>

        </div>
    );
}
 
export default Cartview;