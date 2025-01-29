import React, { useRef, useEffect } from "react";
import "./Skills.css";

const Skills = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleMouseOver = () => {
        video.muted = true;
        video.play().catch(error => console.log("Play interrupted", error));
        video.style.transform = "scale(1.1)";
        video.style.transition = "transform 0.3s ease";
      };
      
      const handleMouseOut = () => {
        video.pause();
        video.style.transform = "scale(1)";
      };
      
      const handleTouchStart = () => {
        video.muted = true;
        video.loop = true;
        video.play().catch(error => console.log("Play interrupted", error));
      };
      
      video.addEventListener("mouseover", handleMouseOver);
      video.addEventListener("mouseout", handleMouseOut);
      video.addEventListener("touchstart", handleTouchStart);
      
      return () => {
        video.removeEventListener("mouseover", handleMouseOver);
        video.removeEventListener("mouseout", handleMouseOut);
        video.removeEventListener("touchstart", handleTouchStart);
      };
    }
  }, []);

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

      {/* New Section: My Personal Workspace */}
      <div className="workspace-section">
        <h2>My Personal Workspace</h2>
        <p className="video-message">Hover over the video to preview. Touch to play on mobile.</p>
        <div className="video-container">
          <video ref={videoRef} className="workspace-video" preload="auto" muted loop>
            <source src="/path-to-your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-branding">
            <h2>Lasiru Minruk</h2>
            <p>Crafting professional digital experiences with creativity and passion.</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="https://github.com/LasMinruk" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/lasiru_minruk/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Lasiru Minruk. All Rights Reserved. | <a href="#home">Back to Top</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Skills;