import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import '../styles/Footer.css'; 

function Footer() {
  return (
    <div className="footer" >
      <div className="socialMedia">
        <GitHubIcon />
        <LinkedinIcon />
        <TwitterIcon />
        
      </div>
        <p>&copy; 2023 Copyright Shoko Takahashi</p>
    </div>
  );
}

export default Footer;