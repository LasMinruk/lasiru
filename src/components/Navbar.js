import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Lasiru Minruk</h1>
      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="education" smooth={true} duration={800} onClick={toggleMenu}>
            Skills & Education
          </Link>
        </li>
        
        <li>
          <Link to="contact" smooth={true} duration={800} onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
