import React, { useContext } from 'react';
import { CartContext } from '../../Contexts/CartContexts';
import styles from './CartItem.module.css'

const Cartitem = (props) => {

    const {cartItems, onAdd, onRemove} = useContext(CartContext)

    const handleRemove = (item) => {
        onRemove(item)
    }

    const handleAdd = (item) => {
        onAdd(item)
    }

    const itemsTotalPrice = props.qty * props.price;

    return (
        <div className = {styles.container}>
            <span className = {styles.name}> {props.name} </span>
            <span className = {styles.price}>{props.price}€</span>
            <span className = {styles.qty}>
                <button onClick={() => handleRemove(props)}> - </button>
                {props.qty} kpl
                <button onClick={() => handleAdd(props)}> + </button>
                </span>
            <span className = {styles.totalPrice}> {itemsTotalPrice}€ </span>
        </div>
    );
}

export default Cartitem;
