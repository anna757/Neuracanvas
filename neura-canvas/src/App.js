import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './services/AuthContext';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import Navbar from './components/Navbar';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
