import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Typography, Button, TextField } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import '../styles/LoginModal.css'



const LoginModal = ({ open, handleClose }) => {
    const navigate = useNavigate();
    const { logIn, redirectToCheckout, setRedirectToCheckout } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    /**
     * Handles the login process.
     *
     * @param {Event} e - The event object.
     * @return {void} 
     */
    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'user' && password === 'password') {
            logIn();
            handleModalClose();
            document.activeElement.blur();
            if (redirectToCheckout) {
                navigate("/checkout");
                setRedirectToCheckout(false); // Reset the redirect state
            }
        } else {
            setErrorMessage('Invalid username or password!');
        }
    };

    /**
     * Sets the error message, username, and password to empty strings
     * and closes the modal.
     *
     * @return {void} 
     */
    const handleModalClose = () => {
        setErrorMessage('');
        setUsername('');
        setPassword('');
        handleClose();
    };

    return (
        <Modal
            open={open}
            onClose={handleModalClose}
            disableRestoreFocus
        >
            <form className="modal-container" onSubmit={handleLogin}>
                <Typography variant="h5" sx={{mb: "10px"}}>Sign in to NeuraCanvas</Typography>
                <TextField
                    autoFocus
                    className="modal-input"
                    label="Username"
                    variant="outlined"
                    onChange={e => setUsername(e.target.value)}
                    required
                    error={!!errorMessage}
                />
                <TextField
                    className="modal-input"
                    label="Password"
                    type="password"
                    variant="outlined"
                    onChange={e => setPassword(e.target.value)}
                    required
                    error={!!errorMessage}
                    helperText={errorMessage}
                />
                <Button
                    className="modal-button"
                    type="submit"
                    onClick={handleLogin}
                    color="primary"
                >Login
                </Button>
            </form>
        </Modal>
    );
};

export default LoginModal;
