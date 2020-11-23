import React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Layout from '../components/Layout';

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
      <ReactMarkdown>{data.datoCmsContact.content}</ReactMarkdown>
    </Layout>
  );
};

export default Contact;
