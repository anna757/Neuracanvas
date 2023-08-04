import React from 'react';
import imageData from '../data/images.json';
import { Masonry } from '@mui/lab';
import { CardContent, CardActions, Typography, Button, Box, Paper, useTheme, useMediaQuery } from '@mui/material';
import '../styles/CatalogPage.css';

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
    const columns = useColumns();

    return (
        <Box className="catalog-container">
            <Typography variant="h3" className="catalog-title">Explore Our Collection</Typography>
            <Masonry columns={columns} spacing={2}>
                {imageData.map((image) => (
                    <Paper className="catalog-card" key={image.id}>
                        <img src={image.src} alt={image.alt} className="catalog-image" />
                        <CardContent>
                            <Typography variant="h6">{image.name}</Typography>
                            <Typography variant="body1">{image.type}</Typography>
                            <Typography variant="body1">${image.price}</Typography>
                        </CardContent>
                        <CardActions className="catalog-actions">
                            <div>
                                <Button variant="contained" color="primary" size="medium">View Details</Button>
                            </div>
                            <div>
                                <Button variant="contained" color="secondary" size="medium">Add to Cart</Button>
                            </div>
                        </CardActions>
                    </Paper>
                ))}
            </Masonry>
        </Box>
    );
};

export default CatalogPage;
