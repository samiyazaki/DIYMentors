import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
  return (
    <div className="container">
      <h1>Posts</h1>
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
      <Link to="/solutionform" className="button">Add a new post</Link>
    </div>
  );
}

export default PostList;
