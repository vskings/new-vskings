import React, { useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileMenu from './MobileMenu';
import { AuthContext } from '../context/AuthContext';

const Layout = ({ children }) => {
  const { navbar, setNavbar } = useContext(AuthContext);

  return (
    <div className="bg-white dark:bg-black relative">
      <Navbar />

      <div className="relative">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
