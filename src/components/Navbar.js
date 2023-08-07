import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import '../styles/Navbar.css'; 

function Navbar() {
  return (
    <div className="navbar">
      <div className="toggleButton">
        <button></button>
      </div>
      <div className="Links">
        <NavLink to="/react-portfolio/About" activeClassName="active">About</NavLink>
        <NavLink to="/react-portfolio/Portfolio" activeClassName="active">Portfolio</NavLink>
        <NavLink to="/react-portfolio/Resume" activeClassName="active">Resume</NavLink>
        <NavLink to="/react-portfolio/Contact" activeClassName="active">Contact</NavLink>
      </div>
    </div>
  );
}

export default Navbar;