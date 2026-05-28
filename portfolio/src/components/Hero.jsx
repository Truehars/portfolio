import React from 'react';
import { personalInfo, social } from '../data/portfolioData';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">{personalInfo.name}</span>
            </h1>
            <div className="hero-subtitle">
              <span className="typing-animation">{personalInfo.title}</span>
            </div>
            <p className="hero-description">{personalInfo.tagline}</p>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                <i className="fas fa-envelope"></i> Hire Me
              </a>
              <a href="#projects" className="btn btn-secondary">
                <i className="fas fa-briefcase"></i> View My Work
              </a>
            </div>

            <div className="social-links">
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon github"
                title="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon twitter"
                title="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
                title="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container">
              <img src="/images/profile.png" alt="Harshit Verma" />
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <a href="#about">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;
