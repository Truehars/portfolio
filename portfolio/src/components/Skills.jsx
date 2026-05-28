import React, { useState } from 'react';
import { technicalSkills, softSkills } from '../data/portfolioData';
import './Skills.css';

function SkillCard({ skill }) {
  const circumference = 2 * Math.PI * 50;
  const strokeDashoffset = circumference - (skill.percentage / 100) * circumference;

  return (
    <div className="skill-card">
      <div className="skill-circle">
        <svg className="progress-ring" width="120" height="120">
          <circle
            className="progress-ring-bg"
            cx="60"
            cy="60"
            r="50"
          />
          <circle
            className="progress-ring-circle"
            cx="60"
            cy="60"
            r="50"
            style={{ strokeDashoffset }}
          />
        </svg>
        <div className="skill-percentage">{skill.percentage}%</div>
      </div>
      <div className="skill-info">
        <i className={skill.icon}></i>
        <h4>{skill.name}</h4>
        <p>{skill.desc}</p>
      </div>
    </div>
  );
}

function Skills() {
  const [activeTab, setActiveTab] = useState('technical');

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>My <span>Skills</span></h2>
          <p>What I'm good at</p>
        </div>

        <div className="skills-tabs">
          <button
            className={`tab-btn ${activeTab === 'technical' ? 'active' : ''}`}
            onClick={() => setActiveTab('technical')}
          >
            Technical Skills
          </button>
          <button
            className={`tab-btn ${activeTab === 'soft' ? 'active' : ''}`}
            onClick={() => setActiveTab('soft')}
          >
            Soft Skills
          </button>
        </div>

        <div className="skills-grid">
          {(activeTab === 'technical' ? technicalSkills : softSkills).map((skill, idx) => (
            <SkillCard key={idx} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
