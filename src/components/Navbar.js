import React from 'react';
import { Link } from 'gatsby';

import styles from './styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <h1 className={styles.navTitle}>Site title</h1>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Skills</Link>
        </li>
        <li>
          <Link to="/">Projects</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
