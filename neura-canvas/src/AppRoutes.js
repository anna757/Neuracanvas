import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import DetailsPage from './pages/DetailsPage';
import CheckoutPage from './pages/CheckoutPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/product/:id" element={<DetailsPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
};

export default AppRoutes;
