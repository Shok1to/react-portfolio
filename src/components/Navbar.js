import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Navbar.css'; 

function Navbar({ currentPage, handleChangePage }) {
  return (
    <div className="navbar">
      <div className="toggleButton">
        <button></button>
      </div>
      <div className="Links">
        <Link to="/react-portfolio/About" onClick={() => handleChangePage("About")}
            className={currentPage === "About" ? 'nav-link active' : 'nav-link'}>About</Link>
            
        <Link to="/react-portfolio/Portfolio" onClick={() => handleChangePage("Portfolio")}
            className={currentPage === "Portfolio" ? 'nav-link active' : 'nav-link'}>Portfolio</Link>

        <Link to="/react-portfolio/Resume" onClick={() => handleChangePage("Resume")}
            className={currentPage === "Resume" ? 'nav-link active' : 'nav-link'}>Resume</Link>

        <Link to="/react-portfolio/Contact" onClick={() => handleChangePage("Contact")}
            className={currentPage === "Contact" ? 'nav-link active' : 'nav-link'}>Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;