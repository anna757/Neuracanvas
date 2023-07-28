import LinkButton from './LinkButton';
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h6">
              <LinkButton to="/" text="NeuraCanvas" />
            </Typography>
          </Grid>
          <Grid item>
            <LinkButton to="/catalog" text="Catalog" />
          </Grid>
          <Grid item>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button color="inherit" startIcon={<ShoppingCartIcon />}>
                <LinkButton to="/cart" text="Cart" />
              </Button>
              <Button color="inherit" startIcon={<AccountCircleIcon />}>
                <LinkButton to="/account" text="Account" />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
