import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import {
    Button, List, ListItem, ListItemText, ListItemAvatar,
    Avatar, IconButton, Popover, Divider, Typography
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import '../styles/Cart.css'

/**
 * Renders a shopping cart component.
 *
 * @param {object} anchorEl - The anchor element to which the cart component is attached.
 * @return {JSX.Element} The rendered cart component.
 */
const Cart = ({ anchorEl }) => {
    const { cartItems, isCartOpen, setIsCartOpen, 
        handleRemoveItem, handleAdjustQuantity } = useContext(CartContext);
    const { isLoggedIn, openLoginModal, setRedirectToCheckout } = useContext(AuthContext);
    const navigate = useNavigate();

    /**
     * Handles the checkout process.
     * Navigates to the checkout page if the user is logged in
     * Asks the user to login otherwise
     */
    const handleCheckout = () => {
        if (isLoggedIn) {
            navigate("/checkout");
        } else {
            setRedirectToCheckout(true);
            openLoginModal();
            handleClose();
        }
    };

    const handleClose = () => {
        setIsCartOpen(false);
    };

    return (
        <Popover
            open={isCartOpen}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            {cartItems.length === 0 ? (
                <Typography
                    sx={{ p: 1 }}>
                    Your cart is empty
                </Typography>
            ) : (
                <>
                    {
                    /* Loop through the items added to cart
                        and display them in a list. 
                        The list item contains the item name, price, quantity, and remove button.
                        As well as a checkout button */
                    }
                    <List>
                        {cartItems.map((item, index) => (
                            <div key={item.id}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar
                                            src={item.src}
                                            alt={item.name}
                                            className="avatar-square" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.name}
                                        secondary={`$${item.price * item.quantity}`}
                                    />
                                    <div className="item-controls">
                                        <IconButton
                                            onClick={() => handleAdjustQuantity(index, -1)}
                                            size="small"
                                        >
                                            <RemoveIcon />
                                        </IconButton>
                                        <span>{item.quantity}</span>
                                        <IconButton
                                            onClick={() => handleAdjustQuantity(index, 1)}
                                            size="small">
                                            <AddIcon />
                                        </IconButton>
                                        <IconButton onClick={() => handleRemoveItem(index)}><DeleteIcon /></IconButton>
                                    </div>
                                </ListItem>
                                <Divider />
                            </div>
                        ))}
                    </List>
                    <div className="cart-footer">
                        <Button
                            variant="contained"
                            color="primary"
                            className="checkout-button"
                            onClick={handleCheckout}>
                            {isLoggedIn ? 'Proceed to Checkout' : 'Login to Checkout'}
                        </Button>

                    </div>
                </>
            )}
        </Popover>
    );
};

export default Cart;
