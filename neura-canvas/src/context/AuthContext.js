import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);

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
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut, loginModalOpen, openLoginModal, closeLoginModal }}>
      {children}
    </AuthContext.Provider>
  );
};


export {AuthProvider, AuthContext};