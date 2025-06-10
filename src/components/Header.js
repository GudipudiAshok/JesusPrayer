// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';
import Logo from '../assest/logoch.jpg'
const Header = ({ setActiveTab }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTab = (tab) => {
    setActiveTab(tab);
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="headerView">
      <div className="logo">
  <img src={Logo} height={75} width={75} style={{ borderRadius: 10 }} />
</div>


        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => handleTab('home')}>Home</button>
          <button onClick={() => handleTab('about')}>About</button>
        </nav>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </header>
  );
};

export default Header;
