import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import '../styles/Footer.css'; 

function Footer() {
  return (
    <div className="footer" >
      <div className="socialMedia">
      <a href="https://github.com/Shok1to/"><GitHubIcon /></a>
      <a href="https://www.linkedin.com/in/shokotakahashi911/"><LinkedinIcon /></a>
      <a href="https://twitter.com/JPvsCANADA/"><TwitterIcon /></a>
        
      </div>
        <p>&copy; 2023 Copyright Shoko Takahashi</p>
    </div>
  );
}

export default Footer;