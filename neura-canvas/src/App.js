import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './services/AuthContext';
import { CartProvider } from './services/CartContext'; // Import the CartProvider
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import Navbar from './components/Navbar';
import AppRoutes from './AppRoutes';

/**
 * The main component of the application.
 * Renders the authentication provider, theme provider, router, navbar, and app routes.
 * @returns {JSX.Element} The rendered component.
 */
const App = () => {
  return (
    <AuthProvider>
      <CartProvider> 
        <ThemeProvider theme={theme}>
          <Router>
            <Navbar />
            <AppRoutes />
          </Router>
        </ThemeProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
