import React, { useState } from 'react';

const SolutionForm = ({ addSolution }) => {
  const [solution, setSolution] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    addSolution(solution);

    setSolution('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="solution">Add a Solution:</label>
      <textarea 
        id="solution"
        value={solution}
        onChange={(e) => setSolution(e.target.value)}
      />
      <button type="submit">Add Solution</button>
    </form>
  );
};

export default SolutionForm;
