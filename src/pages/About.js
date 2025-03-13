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
            <p>As a Front-End Developer based in Toronto, I’m passionate about creating user-friendly websites that are both functional and visually appealing. I’ve completed the Full Stack Web Development Boot Camp at the University of Toronto, where I honed my skills and stayed up-to-date with the latest trends in web development. Let’s build something awesome together!</p>
            
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