import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addCartItem = (item) => {
        setCartItems(prevItems => [...prevItems, item]);
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, isCartOpen, setIsCartOpen, addCartItem }}>
            {children}
        </CartContext.Provider>
    );
};
