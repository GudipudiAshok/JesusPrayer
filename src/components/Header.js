// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';
import Logo from '../assest/logoch.jpg'
const Header = ({ setActiveTab, activeTab }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTab = (tab) => {
    setActiveTab(tab);
    setMenuOpen(false);
  };

  return (

<header className="header">
      <div className="headerView">
        <div
          className="logo"
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{ cursor: 'pointer' }}
        >
          <img src={Logo} height={75} width={75} style={{ borderRadius: 10 }} />
          <span className="logo-text">Jesus Prayer Ministries</span>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <button
            onClick={() => handleTab('home')}
            className={activeTab === 'home' ? 'active' : ''}
          >
            Home
          </button>
          <button
            onClick={() => handleTab('about')}
            className={activeTab === 'about' ? 'active' : ''}
          >
            About
          </button>
        </nav>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </header>
  );
};

export default Header;
