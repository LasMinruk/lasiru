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
          <Link
            to="education"
            smooth={true}
            duration={400} // Reduced duration for faster scroll response
            offset={-70}  // Adjust for sticky navbar height
            onClick={toggleMenu}
          >
            Skills
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
