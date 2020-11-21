import React from 'react';

const Container = ({ title, content }) => {
  return (
    <main>
      {title ? <h2>{title}</h2> : null}
      {content}
    </main>
  );
};

export default Container;
