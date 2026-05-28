import React, { useState, useEffect } from 'react';
import './Footer.css';

function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Harshit Verma. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>

      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop} title="Back to top">
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </footer>
  );
}

export default Footer;
