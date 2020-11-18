import React from 'react';

import Navbar from './Navbar';
import Container from './Container';
import Footer from './Footer';

import styles from './styles/layout.module.css';
import './styles/global.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <Container content={children} />
      <Footer />
    </div>
  );
};

export default Layout;
