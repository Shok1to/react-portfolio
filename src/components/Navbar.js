import React from 'react';
import { Link, useLocation } from "react-router-dom";
import '../styles/Navbar.css'; 

function Navbar() {
  return (
    <div className="navbar">
      <div className="toggleButton">
        <button></button>
      </div>
      <div className="Links">
        <Link to="/react-portfolio/About">About</Link>
        <Link to="/react-portfolio/Portfolio">Portfolio</Link>
        <Link to="/react-portfolio/Resume">Resume</Link>
        <Link to="/react-portfolio/Contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;