import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import CatalogPage from './components/CatalogPage';
import LoginPage from './components/LoginPage';
import CartPage from './components/CartPage';
import DetailsPage from './components/DetailsPage';
import CheckoutPage from './components/CheckoutPage';
import RegisterPage from './components/RegisterPage';
import UserProfilePage from './components/UserProfilePage';

// Import the components related to the routes here

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:id" element={<DetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/userprofile" element={<UserProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
