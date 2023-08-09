import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import DetailsPage from './pages/DetailsPage';
import CheckoutPage from './pages/CheckoutPage';

/**
 * Defines the main routes for the application.
 * Includes paths for the home page, catalog, product details, and checkout.
 * @returns {JSX.Element} The rendered routes.
 */
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
