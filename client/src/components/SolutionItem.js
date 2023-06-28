import React from 'react';

const SolutionItem = ({ solution }) => {
  return (
    <div className="solution-item">
      <h2>{solution.title}</h2>
      <p>{solution.body}</p>
      <small>Posted by {solution.author}</small>
    </div>
  );
};

export default SolutionItem;
