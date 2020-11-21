import React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Layout from '../components/Layout';

export const query = graphql`
  {
    datoCmsIntroduction {
      content
    }
  }
`;

const Index = ({ data }) => {
  return (
    <Layout>
      <ReactMarkdown>{data.datoCmsIntroduction.content}</ReactMarkdown>
    </Layout>
  );
};

export default Index;
