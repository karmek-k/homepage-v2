import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './styles/project.module.css';

const Project = ({ projectData }) => {
  return (
    <section className={styles.projectSection}>
      <h3>{projectData.name}</h3>
      <ReactMarkdown>{projectData.description}</ReactMarkdown>

      <b>Skills:</b>
      <ul className={styles.skillList}>
        {projectData.skills.map(skill => (
          <li key={skill.name}>{skill.name}</li>
        ))}
      </ul>

      <a href={projectData.repoLink} target="_blank" rel="noopener noreferrer">
        Click here to visit the repo of {projectData.name}
      </a>
    </section>
  );
};

export default Project;
