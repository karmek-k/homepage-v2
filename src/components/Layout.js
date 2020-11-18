import React from 'react';

import Navbar from './Navbar';
import Container from './Container';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container content={children} />
      <Footer />
    </>
  );
};

export default Layout;
