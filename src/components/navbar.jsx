import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav-container">
      <h1 id="Logoo">FORINVEST</h1>
      <div className="hamburger">
        <span className="lines"></span>
        <span className="lines"></span>
        <span className="lines"></span>
      </div>
      <ul id="nav-links">
        <li><a href="#" className="links">Home</a></li>
        <li><a href="#" className="links">Blogs</a></li>
        <li><a href="#" className="links">Gallery</a></li>
        <li><a href="#" className="links">About</a></li>
        <li><a href="#" className="links">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;