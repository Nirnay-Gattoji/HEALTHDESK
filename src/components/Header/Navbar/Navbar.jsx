import React from 'react';
import './Navbar.css';

import logo from '../../../assets/navbar/logo.png';


const Navbar = () => {
  return (
    <nav className="navbar-main">
      {/* 1. Left Component: Company Logo */}
      <div className="navbar-logo">
        {/* Replace this text with an <img> tag for your logo */}
        <img src={logo} alt="HealthDesk Logo" />
      </div>

      {/* 2. Right Component: Navigation Links and Icon */}
      <div className="navbar-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
        
        {/* Cart Icon (using a common Unicode symbol as a placeholder) */}
        <div className="navbar-cart">
          <a href="#cart" aria-label="View Shopping Cart">
            🛒 
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;