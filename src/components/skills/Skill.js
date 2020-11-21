import React from 'react';
import ReactMarkdown from 'react-markdown';

const Skill = ({ name, description }) => {
  return (
    <>
      <h4>{name}</h4>
      <ReactMarkdown>{description}</ReactMarkdown>
    </>
  );
};

export default Skill;
