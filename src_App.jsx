import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AIMusicStudio from './pages/AIMusicStudio';
import AIMusicVideos from './pages/AIMusicVideos';
import AICoverStudio from './pages/AICoverStudio';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music-studio" element={<AIMusicStudio />} />
          <Route path="/video-studio" element={<AIMusicVideos />} />
          <Route path="/cover-studio" element={<AICoverStudio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;