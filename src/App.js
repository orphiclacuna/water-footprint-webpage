import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Challenges from './components/Challenges';
import Solutions from './components/Solutions';
import FutureScope from './components/FutureScope';
import ExploreMore from './components/ExploreMore';
import Navbar from './components/Navbar'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Water Footprint Awareness</h1>
        <Navbar />  {/* Place Navbar here */}
        
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/future-scope" element={<FutureScope />} />
          <Route path="/explore-more" element={<ExploreMore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
