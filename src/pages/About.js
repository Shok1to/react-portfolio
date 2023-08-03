import React from 'react';
import '../styles/About.css';
import Photo from '../assets/IMG_7491.JPG'
export default function About() {
  return (
    <div className="home">

      <div className="about-cont">

        <div className="about">
          <h2>Hello, I'm Shoko</h2>
          <div className="prompt">
            <p>A Front-End Developer based in Toronto. I love creating user-friendly websites that look great.
              I'm currently learning at the University of Toronto boot camp to improve my skills and stay updated with the latest web development trends.
              Let's build something awesome together!</p>
          </div>
        </div>
        <div className='profile-container'>
         <img className="profile" src={Photo} alt='profile photo' />
        </div>
        
      </div>
      <div className="skills"></div>
    </div>

  );
}