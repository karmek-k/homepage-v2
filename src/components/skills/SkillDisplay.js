import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import SkillCategory from './SkillCategory';

const query = graphql`
  {
    allDatoCmsSkillCategory {
      nodes {
        categoryName
      }
    }
  }
`;

const SkillDisplay = ({ skills }) => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const categories = data.allDatoCmsSkillCategory.nodes.map(
          c => c.categoryName
        );

        return categories.map(category => (
          <SkillCategory
            key={category}
            categoryName={category}
            skills={skills}
          />
        ));
      }}
    />
  );
};

export default SkillDisplay;
