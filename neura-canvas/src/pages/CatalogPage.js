import React, { useState, useContext } from 'react';
import imageData from '../data/images.json';
import { Masonry } from '@mui/lab';
import {
    CardContent, CardActions, Typography, Button,
    Box, Paper, useTheme, useMediaQuery, Snackbar, Alert
} from '@mui/material';
import '../styles/CatalogPage.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

/**
 * Calculates the number of columns to be used in a Masonry layout based on the current screen size.
 * The function uses the Material-UI hooks 'useTheme' and 'useMediaQuery' to determine the screen size.
 * 
 * @returns {number} The number of columns to be used in the Masonry layout.
 */
const useColumns = () => {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isLg = useMediaQuery(theme.breakpoints.between('lg', 'xl'));

    return isXs ? 1 : isSm ? 2 : isMd ? 3 : isLg ? 4 : 5;
};

/**
 * Renders a catalog of digital art images with their respective details and actions.
 * 
 * @returns {JSX.Element} The catalog page component.
 */
const CatalogPage = () => {
    const { addCartItem } = useContext(CartContext);
    const columns = useColumns();
    const [snackbarOpen, setSnackbarOpen] = useState(false); // State for controlling Snackbar visibility

    const handleAddToCart = (image) => {
        addCartItem(image);
        setSnackbarOpen(true); // Show the Snackbar
    };

    return (
        <Box className="catalog-container">
            <Typography variant="h3" className="catalog-title">
                Explore Our Collection
            </Typography>
            <Masonry columns={columns} spacing={2}>
                {imageData.map((image) => (
                    <Paper className="catalog-card" key={image.id}>
                        <Link to={`/product/${image.id}`}>
                            <img src={image.src} alt={image.alt} className="catalog-image" />
                        </Link>
                        <CardContent>
                            <Link to={`/product/${image.id}`} className='product-title'>
                                <Typography variant="h6">{image.name}</Typography>
                            </Link>
                            <Typography variant="body1">{image.type}</Typography>
                            <Typography variant="body1">${image.price}</Typography>
                        </CardContent>
                        <CardActions className="catalog-actions">
                            <div>
                                <Link to={`/product/${image.id}`}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="medium">
                                        View Details
                                    </Button>
                                </Link>
                            </div>
                            <div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="medium"
                                    onClick={() => handleAddToCart(image)}>
                                    Add to Cart
                                </Button>
                            </div>
                        </CardActions>
                    </Paper>
                ))}
            </Masonry>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={1500}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}  // Positioning it at the top right
            >
                <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
                    Added to cart!
                </Alert>
            </Snackbar>

        </Box>
    );
};

export default CatalogPage;
