import React from 'react';
import{ useNavigate } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function PortfolioItem({ image, name, url, gitRepo }) {
  const navigate = useNavigate();
  return (
    <a 
      className='portfolioItem'
      href={url}
      target='_blank'
    >
    
     <div style={{ backgroundImage: `url(${image})` }} className='bgImage' />
     <h1>{name}</h1>
     <a href={ gitRepo } target='_blank'><GitHubIcon /></a>
    </a>
    
  );
  
}