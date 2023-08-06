import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from './services/AuthContext';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import LoginModal from './components/LoginModal';
import DetailsPage from './pages/DetailsPage';
import CheckoutPage from './pages/CheckoutPage';

const AppRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/product/:id" element={<DetailsPage />} />
      <Route path="/checkout" element={isLoggedIn ? <CheckoutPage /> : <LoginModal />} />
    </Routes>
  );
};

export default AppRoutes;
