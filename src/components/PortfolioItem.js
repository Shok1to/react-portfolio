import React from 'react';
import{ useNavigate } from "react-router-dom";

export default function PortfolioItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div 
      className='portfolioItem'
      onClick={() =>{
        navigate("/portfolio/" + id);
      }}
    >
     <div style={{ backgroundImage: `url(${image})` }} className='bgImage' />
     <h1>{name}</h1>
      
        
     
    </div>
  );
}