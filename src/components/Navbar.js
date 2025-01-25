import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Lasiru Minruk</h1>
      <ul className="nav-links">
        <li><Link to="education" smooth={true} duration={800}>Skills & Education</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
