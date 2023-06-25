import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Other components and routes go here */}
      </div>
    </Router>
  );
}

export default App;
