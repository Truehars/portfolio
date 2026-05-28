import React from 'react';
import { personalInfo } from '../data/portfolioData';
import './About.css';

function About() {
  const infos = [
    { label: 'Name', value: personalInfo.name },
    { label: 'Email', value: personalInfo.email },
    { label: 'Phone', value: personalInfo.phone },
    { label: 'Location', value: personalInfo.location },
    { label: 'Freelance', value: personalInfo.freelance }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About <span>Me</span></h2>
          <p>Get to know me better</p>
        </div>

        <div className="about-wrapper">
          <div className="about-image">
            <img src="/images/about.jpg" alt="About Harshit Verma" />
          </div>

          <div className="about-content">
            <h3>I'm {personalInfo.name}, a passionate Web Developer</h3>
            <p>{personalInfo.bio}</p>
            <p>{personalInfo.bio2}</p>

            <div className="info-grid">
              {infos.map((info, idx) => (
                <div key={idx} className="info-item">
                  <span className="info-label">{info.label}:</span>
                  <p className="info-value">{info.value}</p>
                </div>
              ))}
            </div>

            <a href="/images/CV.pdf" className="btn btn-primary" download="Harshit_Verma_CV.pdf">
              <i className="fas fa-download"></i> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
