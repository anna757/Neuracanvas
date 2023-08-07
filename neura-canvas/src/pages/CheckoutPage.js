import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; 
import { CartContext } from '../context/CartContext';
import {
    Typography, TextField, Button,
    Divider, Select, MenuItem
} from '@mui/material';
import SnackbarComponent from '../components/SnackbarComponent';

import '../styles/CheckoutPage.css';

const CheckoutPage = () => {
    const { cartItems, handleAdjustQuantity, handleRemoveItem } = useContext(CartContext);
    const { isLoggedIn, openLoginModal } = useContext(AuthContext);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [emptyCartAlert, setEmptyCartAlert] = useState(false);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Effect to watch isLoggedIn state, if it changes to false, open login modal
    useEffect(() => {
        if (!isLoggedIn) {
            openLoginModal();
        }
    }, [isLoggedIn, openLoginModal]);

    const handlePlaceOrder = (e) => {
        e.preventDefault();

        if (calculateTotal() === 0) {
            setEmptyCartAlert(true);
            return;
        }

        // Check if the form is valid
        if (e.target.checkValidity()) {
            setOrderPlaced(true);
            // Logic to handle placing the order goes here
        }
    };


    return (
        <div className="checkout-container">
            <Typography variant="h4" gutterBottom>
                Checkout
            </Typography>

            {/* Order Summary */}
            <div className="order-summary-section">
                <Typography variant="h5">Order Summary</Typography>
                <div className="order-summary">
                    {cartItems.length === 0 ? (
                        <Typography variant="body1">
                            Your cart is empty. <Link to="/catalog" id="catalog-link">Browse our catalog</Link>
                        </Typography>
                    ) : (
                        cartItems.map((item, index) => (
                            <div key={index} className="order-summary-item">
                                <div className="product-details">
                                    <img src={item.src} alt={item.name} />
                                    <div className="product-info">
                                        <Typography variant="body1" fontSize={20}>{item.name}</Typography>
                                        <Typography variant="body1" fontSize={15} color="textSecondary">{item.type}</Typography>
                                        <Typography variant="body1">${item.price} x {item.quantity}</Typography>
                                        <Button
                                            variant="text"
                                            size="small"
                                            color="error"
                                            onClick={() => handleRemoveItem(index)}>Remove</Button>
                                    </div>
                                </div>
                                <Select
                                    value={item.quantity}
                                    onChange={(e) => handleAdjustQuantity(index, e.target.value - item.quantity)}
                                    MenuProps={{ PaperProps: { style: { width: '40px' } } }}
                                >
                                    {[...Array(10).keys()].map((_, i) => (
                                        <MenuItem value={i + 1} key={i + 1}>
                                            {i + 1}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                        )))}
                    <div className="order-summary-total">
                        <Typography
                            variant="h6"
                            align="right">
                            Order Total: ${calculateTotal().toFixed(2)}
                        </Typography>
                    </div>
                </div>
            </div>

            <Divider className="divider-gap" />
            <form onSubmit={handlePlaceOrder} >
                {/* Shipping Information */}
                <Typography variant="h5">Shipping Information</Typography>
                <TextField label="Full Name" variant="outlined" required />
                <TextField label="Address Line 1" variant="outlined" required />
                <TextField label="Address Line 2" variant="outlined" />
                <TextField label="City" variant="outlined" required />
                <TextField label="State" variant="outlined" required />
                <TextField label="Zip Code" variant="outlined" required />
                <Divider className="divider-gap" />
                {/* Payment Information */}
                <Typography variant="h5">Payment Information</Typography>
                <TextField label="Credit Card Number" variant="outlined" required />
                <TextField label="Cardholder Name" variant="outlined" required />
                <TextField label="Expiration Date" variant="outlined" required />
                <TextField label="CVV" variant="outlined" required />

                <Button
                    type='submit'
                    className="place-order-button">
                    Place Order for ${calculateTotal().toFixed(2)}
                </Button>
            </form>
            <SnackbarComponent
                open={orderPlaced}
                handleClose={() => setOrderPlaced(false)}
                duration={6000}
                severity="success"
                message="Order placed successfully!"
            />
            <SnackbarComponent
                open={emptyCartAlert}
                handleClose={() => setEmptyCartAlert(false)}
                duration={6000}
                severity="warning"
                message="Cannot place order. Your cart is empty!"
            />

        </div>
    );
};

export default CheckoutPage;
