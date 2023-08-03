import React from 'react';

export default function PortfolioItem({ image, name }) {
  return (
    <div className='portfolioItem'>
     <div style={{ backgroundImage: `url(${image})` }} className='bgImage' />
     <h1>{name}</h1>
      
        
     
    </div>
  );
}