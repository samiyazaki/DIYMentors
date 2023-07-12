import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Post from './components/Post';
import PostList from './components/PostList';
import SolutionForm from './components/SolutionForm';
import SolutionList from './components/SolutionList';
import LoginForm from './components/LoginForm'; // Import this
import RegisterForm from './components/RegisterForm'; // Import this

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Post />} />
          <Route path='/posts-list' element={<PostList />} />
          <Route path='/solution-form' element={<SolutionForm />} />
          <Route path='/solutions' element={<SolutionList />} />
          <Route path='/login' element={<LoginForm />} /> {/* Add this */}
          <Route path='/register' element={<RegisterForm />} /> {/* Add this */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
