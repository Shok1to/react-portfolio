import React from "react";
import GithubIcon from "@material-ui/icons/Github";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import '../styles/Footer.css'; 

function Footer() {
  return (
    <div className="footer" >
      <div className="socialMedia">
        <GithubIcon />
        <TwitterIcon />
        <LinkedinIcon />
      </div>
        <p>&copy; 2023</p>
    </div>
  );
}

export default Footer;