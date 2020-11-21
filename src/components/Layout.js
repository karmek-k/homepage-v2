import React from 'react';

import Navbar from './Navbar';
import Container from './Container';
import Footer from './Footer';

import styles from './styles/layout.module.css';
import './styles/global.css';

const Layout = ({ children, containerTitle }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <hr />
      <Container content={children} title={containerTitle} />
      <hr />
      <Footer />
    </div>
  );
};

export default Layout;
