import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../services/AuthContext';
import { AppBar, Toolbar, Button, Grid, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LinkButton from './LinkButton';
import '../styles/Navbar.css';

const Navbar = React.memo(() => {
  const { isLoggedIn, logOut } = useContext(AuthContext);

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
            <Button color='primary' startIcon={<ShoppingCartIcon />} component={Link} to='/cart'>Cart</Button>
              <Button color='primary' startIcon={<AccountCircleIcon />} component={Link} to={isLoggedIn ? '/' : '/login'} onClick={isLoggedIn ? logOut : null}>
                {isLoggedIn ? 'Logout' : 'Login'}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
});

export default Navbar;