import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>Resume</h2>
      <Link to = "/Shoko-Resume.pdf" target= "_blank" download>Download Resume</Link>
      
      <h3>Proficiencies:</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>APIs</li>
            <li>NodeJS</li>
            <li>MySQL</li>
            <li>NoSQL</li>
            <li>Sequelize</li>
            <li>Mongoose</li>
            <li>MongoDB</li>
            <li>React</li>
          </ul>
    </div>
   
  );
}