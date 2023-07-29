import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LinkButton from './LinkButton';
import { AuthContext } from '../services/AuthContext';
const Navbar = React.memo(() => {
  const { isLoggedIn, logOut } = useContext(AuthContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6">
              <LinkButton to="/" text="NeuraCanvas" id='logo'/>
            </Typography>
          </Grid>
          <Grid item>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}}>
            <LinkButton to="/" text="Home" />
            <LinkButton to="/catalog" text="Catalog" />
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button color="inherit" startIcon={<ShoppingCartIcon />}>
                <LinkButton to="/cart" text="Cart" />
              </Button>
              <Button color="inherit" startIcon={<AccountCircleIcon />}>
                {isLoggedIn
                  ? <LinkButton onClick={logOut} to="/" text="Logout" />
                  : <LinkButton to="/login" text="Login" />
                }
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
});

export default Navbar;