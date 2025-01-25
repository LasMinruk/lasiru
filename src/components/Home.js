import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Import icons
import "./Home.css";

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="home-content">
        {/* Left Text Section */}
        <div className="text-section" data-aos="fade-right">
          <h1>
            Hi, I'm <span>Lasiru Minruk</span>
          </h1>
          <h2>Undergraduate Software Engineer at SLIIT</h2>
          <p>
            Passionate about crafting responsive, user-friendly, and visually
            stunning websites that seamlessly blend creativity with
            functionality.
          </p>
          <div className="action-row">
            <a href="/cv.pdf" download>
              <button className="btn-primary">Download CV</button>
            </a>
            <div className="social-links">
              <a
                href="https://github.com/LasMinruk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="social-icon github" />
              </a>
              <a
                href="https://www.linkedin.com/in/lasiruminruk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="social-icon linkedin" />
              </a>
              <a
                href="https://www.instagram.com/lasiru_minruk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="social-icon instagram" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="image-section" data-aos="fade-left">
          <div className="circle">
            <img src="/ss.jpg" alt="Lasiru Minruk" className="circle" />
            <div className="photo-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
