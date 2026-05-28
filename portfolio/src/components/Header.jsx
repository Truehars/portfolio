import React, { useState, useEffect } from 'react';
import './Header.css';

function Header({ onThemeToggle, isDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'services', 'contact'];
      let current = 'home';

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top < 200) {
          current = section;
        }
      }
      setActiveNav(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['home', 'about', 'skills', 'projects', 'experience', 'services', 'contact'];

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="#home">
              <span className="logo-text">Harshit</span>
              <span className="logo-accent">Verma</span>
            </a>
          </div>

          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link}`}
                className={`nav-link ${activeNav === link ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </nav>

          <div className="header-controls">
            <button
              className="theme-toggle"
              onClick={onThemeToggle}
              aria-label="Toggle theme"
            >
              {isDark ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
            </button>
            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
