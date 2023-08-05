import React from 'react';
import{ useNavigate } from "react-router-dom";

export default function PortfolioItem({ image, name, url }) {
  const navigate = useNavigate();
  return (
    <div 
      className='portfolioItem'
      onClick={() =>{
        navigate(`${url}`);
      }}
    >
     <div style={{ backgroundImage: `url(${image})` }} className='bgImage' />
     <h1>{name}</h1>
      
        
     
    </div>
  );
}