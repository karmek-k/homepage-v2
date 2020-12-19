import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

import styles from './styles/navbar.module.css';

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Navbar = () => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <nav>
          <h1 className={styles.navTitle}>{data.site.siteMetadata.title}</h1>
          <ul className={styles.navLinks}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    />
  );
};

export default Navbar;
