import React, { useState, useContext } from 'react';
import products from '../data/images.json';
import SnackbarComponent from '../components/SnackbarComponent';
import { Masonry } from '@mui/lab';
import {
    CardContent, CardActions, Typography, Button,
    Box, Paper, useTheme, useMediaQuery, Tabs, Tab, AppBar, TextField
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
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
 * Filters the given array of products based on the selected category and search term.
 *
 * @param {Array} products - The array of products to be filtered.
 * @param {string} selectedCategory - The selected category to filter the products by.
 * @param {string} searchTerm - The search term to filter the products by.
 * @return {Array} - The filtered array of products.
 */
const useFilteredProducts = (products, selectedCategory, searchTerm) => {
    return products
        .filter((product) => !selectedCategory || product.type === selectedCategory)
        .filter((product) => product.name.toLowerCase().includes(searchTerm) || product.type.toLowerCase().includes(searchTerm));
};

/**
 * Shuffles the elements of an array randomly.
 * This is used to display random order of the images in the catalog
 * @param {Array} array - The array to be shuffled.
 * @return {Array} - The shuffled array.
 */
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffledProducts = shuffleArray([...products]);

/**
 * Renders a catalog of digital art images with their respective details and actions.
 * Includes categories for the images
 * Includes search functionality
 * @returns {JSX.Element} The catalog page component.
 */
const CatalogPage = () => {
    const { addCartItem } = useContext(CartContext);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const columns = useColumns();
    const filteredProducts = useFilteredProducts(shuffledProducts, selectedCategory, searchTerm);

    /**
     * Function to handle adding a product to the cart.
     *
     * @param {Object} product - The product object to be added to the cart.
     */
    const handleAddToCart = (product) => {
        addCartItem(product);
        setSnackbarOpen(true);
    };

    return (
        <Box className="catalog-container">
            <Typography variant="h3" className="catalog-title">
                Explore Our Collection
            </Typography>
            
            {/* Category selection + Search
                Renders a search bar and a set of tabs for different categories. 
                The AppBar component represents a navigation bar at the top of the screen. 
                Inside the AppBar, there is a Box component that contains the search bar and the tabs. */}
            <AppBar position="static" color="neutral" className="categories-container">
                <Box display="flex" justifyContent="space-between" alignItems="center">

                    <Tabs value={selectedCategory} onChange={(e, newValue) => setSelectedCategory(newValue)} indicatorColor="primary" textColor="primary">
                        <Tab label="All" value={null} />
                        <Tab label="Digital Art" value="Digital Art" />
                        <Tab label="Patterns" value="Pattern" />
                        <Tab label="Realistic Photos" value="Realistic Photos" />
                    </Tabs>
                    <Box width={{ xs: '100%', sm: '50%', md: '20%' }} className="search-container">
                        <TextField
                            className="search-input"
                            label="Search"
                            variant="outlined"
                            fullWidth
                            placeholder="Search by name or type"
                            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />        
                    </Box>
                </Box>
            </AppBar>

            {/* Display products usingfilteredProducts array to map over each product and create a Paper component for each one. 
                Each Paper component contains an image, product details (name, type, price), and two buttons: "View Product" and "Add to Cart." 
                The handleAddToCart function is called when the "Add to Cart" button is clicked. 
                The products are displayed in a masonry layout using the Masonry component.
            */}
            <Masonry columns={columns} spacing={2}>
                {filteredProducts.map((product) => (
                    <Paper className="catalog-card" key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <img src={product.src} alt={product.alt} className="catalog-image" />
                        </Link>
                        <CardContent>
                            <Link to={`/product/${product.id}`} className='product-title'>
                                <Typography variant="h6">{product.name}</Typography>
                            </Link>
                            <Typography variant="body1">{product.type}</Typography>
                            <Typography variant="body1">${product.price}</Typography>
                        </CardContent>
                        <CardActions className="catalog-actions">
                            <div>
                                <Link to={`/product/${product.id}`}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="medium">
                                        View Product
                                    </Button>
                                </Link>
                            </div>
                            <div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="medium"
                                    onClick={() => handleAddToCart(product)}>
                                    Add to Cart
                                </Button>
                            </div>
                        </CardActions>
                    </Paper>
                ))}
            </Masonry>
            
            {/* Notification for successful add to cart */}
            <SnackbarComponent
                open={snackbarOpen}
                handleClose={() => setSnackbarOpen(false)}
                duration={1500}
                severity="success"
                message="Added to cart!"
            />
        </Box>
    );
};


export default CatalogPage;
