import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, List, ListItem, ListItemText, ListItemAvatar, 
    Avatar, IconButton, Popover, Divider, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '../styles/Cart.css'

const Cart = ({ anchorEl }) => {
    const { cartItems, isCartOpen, setIsCartOpen, handleRemoveItem, handleAdjustQuantity } = useContext(CartContext);

    const handleClose = () => {
        setIsCartOpen(false);
    };

    console.log(cartItems)
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
                    style={{ padding: '1rem' }}>
                    Your cart is empty
                </Typography>
            ) : (
                <>
                    <List>
                        {cartItems.map((item, index) => (
                            <div key={index}>
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
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            color="error"
                                            onClick={() => handleRemoveItem(index)}>Remove</Button>
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
                            className="checkout-button">
                            Checkout
                        </Button>
                    </div>
                </>
            )}
        </Popover>
    );
};

export default Cart;
