import React from 'react';
import { graphql } from 'gatsby';

import Project from '../components/projects/Project';
import Layout from '../components/Layout';

export const query = graphql`
  {
    allDatoCmsProject {
      nodes {
        name
        description
        skills {
          name
        }
        repoLink
      }
    }
  }
`;

const Projects = ({ data }) => {
  const projects = data.allDatoCmsProject.nodes;

  return (
    <Layout containerTitle="My projects">
      {projects.map(project => (
        <Project key={project.name} projectData={project} />
      ))}
    </Layout>
  );
};

export default Projects;
