import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from './services/AuthContext';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import DetailsPage from './pages/DetailsPage';
import CheckoutPage from './pages/CheckoutPage';
import RegisterPage from './pages/RegisterPage';
import UserProfilePage from './pages/UserProfilePage';

const AppRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/product/:id" element={<DetailsPage />} />
      <Route path="/cart" element={isLoggedIn ? <CartPage /> : <LoginPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/userprofile" element={isLoggedIn ? <UserProfilePage /> : <LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
