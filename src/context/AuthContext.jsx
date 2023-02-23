import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  return (
    <AuthContext.Provider
      value={{ modalIsOpen, setModalIsOpen, navbar, setNavbar }}
    >
      {children}
    </AuthContext.Provider>
  );
};
