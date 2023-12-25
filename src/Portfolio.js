// Portfolio.js

import React from 'react';
import './Portfolio.css'; // Make sure to create a Portfolio.css file in the same directory
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Timeline from './Timeline'
function Portfolio() {
  return (
    <div className="portfolio">
      <div className="profile-section">
        <img src="profile.jpg" alt="Profile" className="profile-image"/>
      </div>
      <div className="info-section">
        <h1>Lykheang Taing</h1>
        <p>
          Hi, I'm Kheang, a software developer passionate about crafting innovative technological solutions.I graduated my bachelor degree in Computer Science and Information Technology Management at The University of Auckland.
        Currently,I am studying Master of Information Technology at The University Of Auckland and plan to finish my degree in 2024.
        </p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/lykheang-taing-086044205/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/ltai457" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default Portfolio;
