import React, { useState } from 'react';
import { education, experience, achievements } from '../data/portfolioData';
import './Experience.css';

function Experience() {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2>My <span>Journey</span></h2>
          <p>Education, experience, and professional growth</p>
        </div>

        <div className="experience-tabs">
          <button
            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <i className="fas fa-graduation-cap"></i> Education
          </button>
          <button
            className={`tab-btn ${activeTab === 'work' ? 'active' : ''}`}
            onClick={() => setActiveTab('work')}
          >
            <i className="fas fa-briefcase"></i> Experience
          </button>
          <button
            className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
            onClick={() => setActiveTab('achievements')}
          >
            <i className="fas fa-trophy"></i> Achievements
          </button>
        </div>

        <div className="experience-content">
          {activeTab === 'education' && (
            <div className="education-list">
              {education.map((edu, idx) => (
                <div key={idx} className={`edu-card ${edu.status === 'In Progress' ? 'current' : 'completed'}`}>
                  <div className="edu-marker">
                    <i className={edu.icon}></i>
                  </div>
                  <div className="edu-details">
                    <div className="edu-header">
                      <h3>{edu.degree}</h3>
                      <span className={`status ${edu.status.toLowerCase().replace(' ', '-')}`}>
                        {edu.status}
                      </span>
                    </div>
                    <div className="edu-meta">
                      <p className="institution">
                        <i className="fas fa-university"></i> {edu.institution}
                      </p>
                      <p className="location">
                        <i className="fas fa-map-marker-alt"></i> {edu.location}
                      </p>
                      <p className="year">
                        <i className="fas fa-calendar"></i> {edu.year}
                      </p>
                    </div>
                    <p className="description">{edu.description}</p>
                    <div className="learning-areas">
                      {edu.learning.map((area, i) => (
                        <div key={i} className="area">
                          <strong>{area.title}:</strong> {area.desc}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'work' && (
            <div className="experience-list">
              {experience.map((exp, idx) => (
                <div key={idx} className={`exp-card ${exp.status === 'Current' ? 'current' : ''}`}>
                  <div className="exp-marker">
                    <i className={exp.icon}></i>
                  </div>
                  <div className="exp-details">
                    <div className="exp-header">
                      <h3>{exp.position}</h3>
                      <span className={`status ${exp.status.toLowerCase()}`}>{exp.status}</span>
                    </div>
                    <p className="company">
                      <i className="fas fa-building"></i> {exp.company}
                    </p>
                    <p className="year">
                      <i className="fas fa-calendar"></i> {exp.year}
                    </p>
                    <p className="description">{exp.description}</p>
                    <div className="highlights">
                      {exp.highlights.map((highlight, i) => (
                        <div key={i} className="highlight-item">
                          <i className={highlight.icon}></i>
                          <span>{highlight.text}</span>
                        </div>
                      ))}
                    </div>
                    {exp.achievements && (
                      <div className="achievements-mini">
                        {exp.achievements.map((ach, i) => (
                          <div key={i} className="achievement-mini">
                            <div className="ach-number">{ach.number}</div>
                            <div className="ach-label">{ach.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="achievements-grid">
              {achievements.map((ach, idx) => (
                <div key={idx} className="achievement-card">
                  <div className="ach-icon">
                    <i className={ach.icon}></i>
                  </div>
                  <h3>{ach.title}</h3>
                  <p>{ach.description}</p>
                  <div className="ach-year">{ach.year}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Experience;
