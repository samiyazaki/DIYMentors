import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  return (
    <div className="post-item">
      <h2>{post.title}</h2>
      <h3>By: {post.author}</h3>
      <p>{post.summary}</p>
      <Link to={`/posts/${post.id}`}>Read More</Link>
    </div>
  );
};

export default PostItem;
