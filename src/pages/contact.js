import React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Layout from '../components/Layout';
import styles from '../components/contact/styles/list.module.css';

export const query = graphql`
  {
    datoCmsContact {
      content
    }
  }
`;

const Contact = ({ data }) => {
  return (
    <Layout containerTitle="Get in touch">
      <ReactMarkdown className={styles.contactList}>
        {data.datoCmsContact.content}
      </ReactMarkdown>
    </Layout>
  );
};

export default Contact;
