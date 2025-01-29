import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div id="skills" className="skills-section">
      <h2>Skills</h2>
      <p>
        Below are some of the technologies and tools I am proficient in. I
        constantly strive to learn and grow.
      </p>

      <div className="skills-container">
        <div className="skill-card">
          <h3>Frontend Development</h3>
          <p>React, HTML, CSS, JavaScript, Bootstrap, Tailwind</p>
        </div>
        <div className="skill-card">
          <h3>Backend Development</h3>
          <p>Node.js, Express.js, MongoDB, REST APIs</p>
        </div>
        <div className="skill-card">
          <h3>UI/UX Design</h3>
          <p>Figma, Adobe XD, Photoshop</p>
        </div>
        <div className="skill-card">
          <h3>Other Tools</h3>
          <p>Git, Postman, Docker, Visual Studio Code</p>
        </div>
      </div>
      <footer className="footer">
  <div className="footer-container">
    {/* Branding */}
    <div className="footer-branding">
      <h2>Lasiru Minruk</h2>
      <p>Crafting professional digital experiences with creativity and passion.</p>
    </div>

    {/* Quick Links */}
    <div className="footer-links">
      <h3>Quick Links</h3>
      <ul>
        
        <li><a href="https://github.com/LasMinruk" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://www.instagram.com/lasiru_minruk/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      </ul>
    </div>

    {/* Social Media */}
    <div className="footer-socials">
      <h3>.Follow Me.</h3>
     
    </div>
  </div>

  {/* Copyright */}
  <div className="footer-bottom">
    <p>© 2025 Lasiru Minruk. All Rights Reserved. | <a href="#home">Back to Top</a></p>
  </div>
</footer>
    </div>
  );
};

export default Skills;
