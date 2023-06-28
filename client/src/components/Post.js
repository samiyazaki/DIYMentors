import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Posted by: {post.author}</p>
    </div>
  );
};

export default Post;
