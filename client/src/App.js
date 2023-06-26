import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import other pages here...

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home} />
        {/* other routes here... */}
      </div>
    </Router>
  );
}

export default App;
