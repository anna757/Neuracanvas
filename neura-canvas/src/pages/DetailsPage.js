import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { Typography, Button, Container, Box } from '@mui/material';
import products from '../data/images.json';
import SnackbarComponent from '../components/SnackbarComponent';

import '../styles/DetailsPage.css';


/**
 * Shows product details
 * Displays the Name of the product, a big image, the category and price
 * Includes an add to cart button or a checkout button.
 * @param {Object} product - The product to be viewed.
 * @return {JSX.Element} The JSX element for the product detail page
 */
const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addCartItem } = useContext(CartContext);
  const { isLoggedIn, openLoginModal, setRedirectToCheckout } = useContext(AuthContext);
  const product = products.find((p) => p.id === parseInt(id));
  const [snackbarOpen, setSnackbarOpen] = useState(false);


  /**
   * Handles adding a product to the cart.
   *
   * @param {Object} product - The product to be added to the cart.
   */
  const handleAddToCart = (product) => {
    addCartItem(product);
    setSnackbarOpen(true);
  };

  /**
   * Handles the "Buy Now" functionality.
   *
   * @return {undefined} This function does not return a value.
   */
  const handleBuyNow = () => {
    if (isLoggedIn) {
      addCartItem(product);
      navigate("/checkout");
    } else {
      setRedirectToCheckout(true)
      openLoginModal();
    }
  };

  if (!product) {
    return <Typography variant="h4">Product not found</Typography>;
  }

  return (
    <Container className="details-container">
      <Box className="details-content">
        <Typography variant="h4" className="product-name">{product.name}</Typography>
        <img src={product.src} alt={product.name} className="product-image" />
        <Typography variant="body1" className="product-type">{product.type}</Typography>
        <Typography variant="h5" className="product-price">${product.price}</Typography>
        <Typography variant="body2" className="product-description">{product.description}</Typography>
        <div className="buttons-container">
          <Button variant="contained" color="primary" className="button" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
          <Button variant="contained" color="primary" className="button" onClick={handleBuyNow}>Buy Now</Button>
        </div>
      </Box>
      <SnackbarComponent
        open={snackbarOpen}
        handleClose={() => setSnackbarOpen(false)}
        duration={1500}
        severity="success"
        message="Added to cart!"
      />
    </Container>
  );
};

export default DetailsPage;
