import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-tabs">
      <div className="toggleButton">
        <button></button>
      </div>
      <div className="Links">
        <Link to="/About">About</Link>
        <Link to="/Portfolio">Portfolio</Link>
        <Link to="/Resume">Resume</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;