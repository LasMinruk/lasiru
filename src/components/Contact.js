import React from 'react';
import { FaNode, FaReact } from 'react-icons/fa'; // Importing Node.js and React icons
import { SiMongodb, SiExpress, SiPostman, SiCplusplus, SiC, SiFiverr, SiFigma, SiAdobephotoshop } from 'react-icons/si'; // Updated import for Photoshop
import './Contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h2>Familiar With</h2>
      <p>Feel free to connect with me or check out the technologies I work with!</p>
      <div className="social-links">
        {/* MongoDB */}
        <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
          <SiMongodb className="social-icon mongodb" />
        </a>

        {/* Express */}
        <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
          <SiExpress className="social-icon express" />
        </a>

        {/* React */}
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          <FaReact className="social-icon react" />
        </a>

        {/* Node.js */}
        <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
          <FaNode className="social-icon nodejs" />
        </a>

        {/* Postman */}
        <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">
          <SiPostman className="social-icon postman" />
        </a>

        {/* C++ */}
        <a href="https://www.cplusplus.com/" target="_blank" rel="noopener noreferrer">
          <SiCplusplus className="social-icon cpp" />
        </a>

        {/* C */}
        <a href="https://www.learn-c.org/" target="_blank" rel="noopener noreferrer">
          <SiC className="social-icon c" />
        </a>

        {/* Figma */}
        <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
          <SiFigma className="social-icon figma" />
        </a>

        {/* Fiverr */}
        <a href="https://www.fiverr.com/" target="_blank" rel="noopener noreferrer">
          <SiFiverr className="social-icon fiverr" />
        </a>

        {/* Photoshop */}
        <a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noopener noreferrer">
          <SiAdobephotoshop className="social-icon photoshop" />
        </a>
      </div>

      {/* Add your photo here */}
      <div className="photo-container">
        <div className="photo-wrapper">
          <img className="profile-photo" src="hover-photo1.jpg" alt="Your descriptive text" />
          <div className="details-container">
            <br/>
            <p><strong>Email:</strong> lasiruminrukworkspace@gmail.com</p>
            <p><strong>Age:</strong> 24</p>
            
          </div>
        </div>
      </div>

      {/* Footer Section */}
{/* Footer Section */}



    </div>
  );
};

export default Contact;
