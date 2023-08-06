
import React from 'react';
import { Modal, Typography, Button, List, ListItem, Divider } from '@mui/material';

const CartModal = ({ cartItems, open, onClose }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="cart-modal-title"
            aria-describedby="cart-modal-description"
        >
            <div style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute', width: '80%', backgroundColor: 'white', padding: '1rem', borderRadius: '8px', maxHeight: '80vh', overflowY: 'auto' }}>
                <Typography id="cart-modal-title" variant="h6" component="div">
                    Your Cart
                </Typography>
                <Divider />
                <List>
                    {cartItems.map((item, index) => (
                        <ListItem key={index}>
                            {item.name} - ${item.price}
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <Button variant="contained" color="primary" style={{ marginTop: '1rem' }}>
                    Checkout
                </Button>
            </div>
        </Modal>
    );
};

export default CartModal;
