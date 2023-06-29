import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to DIY Pro</h1>
      <p>The social media site for DIY enthusiasts!</p>
      <Link to="/posts" className="button">See all posts</Link>
    </div>
  );
}

export default Home;
