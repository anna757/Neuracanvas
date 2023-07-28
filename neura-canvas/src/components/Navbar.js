import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6">
              <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                NeuraCanvas
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Button color="inherit">
              <Link to="/catalog" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                Catalog
              </Link>
            </Button>
          </Grid>
          <Grid item>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button color="inherit" startIcon={<ShoppingCartIcon />}>
                <Link to="/cart" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                  Cart
                </Link>
              </Button>
              <Button color="inherit" startIcon={<AccountCircleIcon />}>
                <Link to="/account" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                  Account
                </Link>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
