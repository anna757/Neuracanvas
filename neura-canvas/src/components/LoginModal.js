import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Typography, Button, TextField, useTheme, } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import '../styles/LoginModal.css'



const LoginModal = ({ open, handleClose }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const { logIn, redirectToCheckout, setRedirectToCheckout } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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
                <Typography variant="h5">Sign in to NeuraCanvas</Typography>
                <TextField
                    autoFocus
                    className="modal-input"
                    label="Username"
                    variant="outlined"
                    onChange={e => setUsername(e.target.value)}
                    required
                    sx={{ margin: '15px 0' }}
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
                    type="submit"
                    onClick={handleLogin}
                    color="primary"
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        alignItems: 'center',
                        color: 'white',
                        marginTop: '10px',
                        borderRadius: '5px',
                        '&:hover': {
                            backgroundColor: 'var(--secondary-color)'
                        }
                    }}
                >Login
                </Button>
            </form>
        </Modal>
    );
};

export default LoginModal;
