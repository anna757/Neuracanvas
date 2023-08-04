import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,   // Extra small devices
            sm: 500, // Small devices
            md: 900, // Medium devices
            lg: 1300, // Large devices
            xl: 1536, // Extra large devices
        },
    },
    palette: {
        primary: {
            main: '#2A4D69',
        },
        secondary: {
            main: '#4B86B4',
        },
        accent: {
            main: '#ADCBE3',
        },
        neutral: {
            main: '#EBF5FB',
        },
    },
});

export default theme;
