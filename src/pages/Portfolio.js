import React from 'react';
import PortfolioItem from '../components/PortfolioItem';
import { PortfolioList } from '../helpers/PortfolioList'

import '../styles/Portfolio.css'; 

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <h1>My Personal Projects</h1>
      <div className='portfolioList'>
        {PortfolioList.map((portfolio) => {
          return <PortfolioItem name={portfolio.name} image={portfolio.image} url={portfolio.url}/>;
        })}
      </div>
    </div>
  );
}