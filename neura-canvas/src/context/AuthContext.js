import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

/**
 * Authentication context provider.
 * Manages states for login status, login modal visibility, and checkout redirection.
 * @param {object} props The children components.
 * @returns {JSX.Element} The rendered provider.
 */
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [redirectToCheckout, setRedirectToCheckout] = useState(false); // State for external control

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

  // Initialize login status from localStorage
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(storedLoginStatus === 'true');
  }, []);

  const logIn = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const logOut = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut, loginModalOpen, 
    openLoginModal, closeLoginModal, redirectToCheckout, setRedirectToCheckout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };