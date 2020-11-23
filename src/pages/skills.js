import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SkillDisplay from '../components/skills/SkillDisplay';

export const query = graphql`
  {
    allDatoCmsSkill {
      nodes {
        category {
          categoryName
        }
        name
        description
      }
    }
  }
`;

const Skills = ({ data }) => {
  return (
    <Layout containerTitle="My skills">
      <SkillDisplay skills={data.allDatoCmsSkill.nodes} />
    </Layout>
  );
};

export default Skills;
