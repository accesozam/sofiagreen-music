// src/components/Header.jsx
import React from 'react';
import { Music } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-bg"></div>
      <div className="header-content">
        <div className="logo">
          <Music size={32} />
          <h1>
            <span className="logo-name">SOFIA GREEN</span>
            <span className="logo-subtitle">MUSIC</span>
          </h1>
        </div>
        <div className="header-stats">
          <div className="stat-item">
            <span className="stat-number">2026</span>
            <span className="stat-label">ERA</span>
          </div>
        </div>
      </div>
      <div className="scan-line"></div>
    </header>
  );
};

export default Header;
