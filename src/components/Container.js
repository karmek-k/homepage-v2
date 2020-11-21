import React from 'react';

const Container = ({ title, content }) => {
  return (
    <main>
      <h2>{title}</h2>
      {content}
    </main>
  );
};

export default Container;
