import React, { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartContextProvider = props => {

    const [cartItems, setCartItems] = useState([]);

    const onAdd = (menuItem) => {
        const exists = cartItems.find((i) => i._id === menuItem._id)
        if (exists) {
            setCartItems(
                cartItems.map((i) => i._id === menuItem._id ? { ...exists, qty: exists.qty + 1 } : i));
                
        } else {
            setCartItems([...cartItems, { ...menuItem, qty: 1 }]);
            
        }
    }

    const onRemove = (menuItem) => {
        const exists = cartItems.find((i) => i._id === menuItem._id)
        if (exists.qty === 1) {
            setCartItems(cartItems.filter((i) => i._id !== menuItem._id));
            
        } else {
            setCartItems(
                cartItems.map((i) => i._id === menuItem._id ? { ...exists, qty: exists.qty - 1 } : i));
                
        }
    }

    return (
        <CartContext.Provider value={{cartItems, setCartItems, onAdd, onRemove}}>
            {props.children}
        </CartContext.Provider>
    )

}

