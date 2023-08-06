import React, { useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../services/AuthContext';
import { CartContext } from '../services/CartContext';
import { AppBar, Toolbar, Button, Grid, Box, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LinkButton from './LinkButton';
import CartModal from './CartModal';
import LoginModal from './LoginModal';
import '../styles/Navbar.css';


const Navbar = React.memo(() => {
  const { isLoggedIn, logOut } = useContext(AuthContext);
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <AppBar position='static' >
      <Toolbar className='navbar'>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item>
            <Link to='/' id='logo'>
              <img src={'/logo.png'} alt='NeuraCanvas Logo' id='logo' />
            </Link>
          </Grid>
          <Grid item>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <LinkButton to='/' text='Home' />
              <LinkButton to='/catalog' text='Catalog' />
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Badge badgeContent={cartItems.length} color="error">
                <Button color='primary' startIcon={<ShoppingCartIcon />}  onClick={() => setIsCartOpen(true)}>Cart</Button>
              </Badge>
              <Button
                color='primary'
                startIcon={<AccountCircleIcon />}
                onClick={() => {
                  if (isLoggedIn) logOut();
                  else setLoginModalOpen(true);  // Open the login modal
                  }}>
                {isLoggedIn ? 'Logout' : 'Login'}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
      <CartModal cartItems={cartItems} open={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <LoginModal 
      open={loginModalOpen} 
      handleClose={() => setLoginModalOpen(false)} />
    </AppBar>
  );
});

export default Navbar;
