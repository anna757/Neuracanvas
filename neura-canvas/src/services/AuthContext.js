import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(storedLoginStatus === 'false');
  }, []);

  const logIn = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const logOut = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
  };

  const register = (user, password) => {
    // Here you would typically make a request to your server to register the user.
    // For now, we'll just log the user in after they register.
    logIn(user, password);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider, AuthContext};