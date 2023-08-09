import React, { createContext, useState } from 'react';

export const CartContext = createContext();

/**
 * Adds a new item to the cart or updates the quantity if the item already exists.
 *
 * @param {Object} item - The item to be added or updated in the cart.
 * @return {Array} - The updated cart items.
 */
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const clearCart = () => {
        setCartItems([]); 
      };
    /**
     * Adds a new item to the cart or updates the quantity if the item already exists.
     *
     * @param {Object} item - The item to be added or updated in the cart.
     * @return {Array} - The updated cart items.
     */
    const addCartItem = (item) => {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(cartItem => cartItem.id === item.id);
            if (existingItemIndex !== -1) {
                // Item exists, update the quantity
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].quantity += 1;
                return updatedItems;
            }
            // Item doesn't exist, add a new item with quantity = 1
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    /**
     * Removes an item from the cart at the specified index.
     *
     * @param {number} index - The index of the item to remove.
     * @return {void} This function does not return a value.
     */
    const handleRemoveItem = (index) => {
        const newCartItems = [...cartItems];
        newCartItems[index].removing = true;
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    /**
     * Updates the quantity of an item in the cart and removes it if the quantity becomes 0.
     *
     * @param {number} index - The index of the item in the cart.
     * @param {number} amount - The amount to adjust the quantity by.
     * @return {void} Returns nothing.
     */
    const handleAdjustQuantity = (index, amount) => {
        setCartItems(prevItems => {
            const updatedItems = [...prevItems];
            updatedItems[index].quantity += amount;

            // If the quantity is 0, remove the item from the cart
            if (updatedItems[index].quantity === 0) {
                updatedItems.splice(index, 1);
            }

            return updatedItems;
        });
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            setCartItems,
            isCartOpen,
            setIsCartOpen,
            addCartItem,
            handleAdjustQuantity,
            handleRemoveItem,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    );
};
