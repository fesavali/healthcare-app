// src/components/Header.js

import React from 'react';
import './Header.css'; // Import the CSS file
import './site_layout.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="logo">Healthcare App</div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/services">Services</a></li>
        </ul>
      </nav>
      <div className="login-register-buttons">
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
