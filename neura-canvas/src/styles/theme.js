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
            light: '#4B86B4',
            main: '#2A4D69',
            dark: '#1A2D3A',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#ADCBE3',
            main: '#4B86B4',
            dark: '#2A4D69',
            contrastText: '#ffffff',
        },
        accent: {
            light: '#E1F2FA',
            main: '#ADCBE3',
            dark: '#6E96B0',
            contrastText: '#2A4D69',
        },
        neutral: {
            light: '#FFFFFF',
            main: '#EBF5FB',
            dark: '#C3E0EC',
            contrastText: '#2A4D69',
        },
    },
});

export default theme;
