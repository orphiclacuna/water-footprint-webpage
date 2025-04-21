import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="navbar-button">About</Link>
      <Link to="/challenges" className="navbar-button">Challenges</Link>
      <Link to="/solutions" className="navbar-button">Solutions</Link>
      <Link to="/future-scope" className="navbar-button">Future Scope</Link>
      <Link to="/explore-more" className="navbar-button">Explore More</Link>
    </nav>
  );
};

export default Navbar;
