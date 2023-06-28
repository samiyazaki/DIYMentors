import React from 'react';
import SolutionItem from './SolutionItem';

const SolutionList = ({ solutions }) => {
  return (
    <div className="solution-list">
      {solutions.map((solution, index) => (
        <SolutionItem key={index} solution={solution} />
      ))}
    </div>
  );
};

export default SolutionList;
