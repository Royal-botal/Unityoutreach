import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="nav-bar">
            <div className="nav-container">
                <div className="nav-content">
                    <img src="/logo.png" alt="Unity Outreach Logo" className="logo" />
                    <div className="nav-links">
                        <Link to="/about" className="nav-link">About Us</Link>
                        <Link to="/mission" className="nav-link">Mission & Vision</Link>
                        <Link to="/programs" className="nav-link">Programs</Link>
                        <Link to="/founders" className="nav-link">Founders</Link>
                        <Link to="/partners" className="nav-link">Partners</Link>
                        <Link to="/donate" className="nav-link donate-link">Donate</Link>
                    </div>
                    <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="menu-icon">☰</span>
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="mobile-menu">
                    <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About Us</Link>
                    <Link to="/mission" className="nav-link" onClick={() => setMenuOpen(false)}>Mission & Vision</Link>
                    <Link to="/programs" className="nav-link" onClick={() => setMenuOpen(false)}>Programs</Link>
                    <Link to="/founders" className="nav-link" onClick={() => setMenuOpen(false)}>Founders</Link>
                    <Link to="/partners" className="nav-link" onClick={() => setMenuOpen(false)}>Partners</Link>
                    <Link to="/donate" className="nav-link donate-link" onClick={() => setMenuOpen(false)}>Donate</Link>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
