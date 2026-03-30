import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#000', color: '#fff', display: 'flex', gap: '1rem' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
      <Link to="/music-studio" style={{ color: '#fff', textDecoration: 'none' }}>Music Studio</Link>
      <Link to="/video-studio" style={{ color: '#fff', textDecoration: 'none' }}>Video Studio</Link>
      <Link to="/cover-studio" style={{ color: '#fff', textDecoration: 'none' }}>Cover Studio</Link>
    </nav>
  );
};

export default Navbar;