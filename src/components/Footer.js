import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'; 

function Footer() {
  return (
    <div className="footer" >
      <div className="socialMedia">
      <a href="https://github.com/Shok1to/"><GitHubIcon /></a>
      <a href="https://www.linkedin.com/in/shokotakahashi911/"><LinkedinIcon /></a>
      <a href="https://twitter.com/JPvsCANADA/"><TwitterIcon /></a>
        
      </div>
        <p>&copy; 2024 Copyright Shoko Takahashi</p>
    </div>
  );
}

export default Footer;