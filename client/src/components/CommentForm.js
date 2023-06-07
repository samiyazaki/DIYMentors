import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ postId }) => {
  const [content, setContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform the post request here
    try {
      const response = await axios.post(`/api/posts/${postId}/comments`, { content });
      // Handle the response (e.g., clear the form, show a success message)
    } catch (error) {
      // Handle the error (e.g., display an error message)
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Comment:</label>
          <textarea className="form-control" rows="3" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>

        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;