import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/Resume.css";
export default function Home() {
  return (
    <div style ={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "left",
      flexDirection:"column",
      height: "100%",
      width: "100%",
      
    }}>
      <h2>Resume</h2>
    
      <Link to = "/Shoko-Resume-v2.pdf" target= "_blank" download >Download Resume</Link>

      
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