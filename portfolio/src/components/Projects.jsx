import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import './Projects.css';

function ProjectCard({ project }) {
  return (
    <div className={`project-card ${project.featured ? 'featured' : ''}`}>
      <div className="project-image">
        <img src={`/images${project.image}`} alt={project.title} />
        <div className="project-overlay">
          <div className="project-actions">
            {project.liveLink !== '#' && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="action-btn" title="Live Demo">
                <i className="fas fa-external-link-alt"></i>
              </a>
            )}
            {project.githubLink && project.githubLink !== '#' && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="action-btn" title="Source Code">
                <i className="fab fa-github"></i>
              </a>
            )}
            <button className="action-btn" title="View Details">
              <i className="fas fa-info-circle"></i>
            </button>
          </div>
        </div>
        {project.featured && (
          <div className="featured-badge">
            <i className="fas fa-star"></i> Featured
          </div>
        )}
      </div>

      <div className="project-content">
        <div className="project-category">{project.category.replace(/^\w/, c => c.toUpperCase())}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div className="project-stats">
          {project.rating && (
            <div className="stat">
              <i className="fas fa-star"></i>
              <span>{project.rating}</span>
            </div>
          )}
          {project.forks && (
            <div className="stat">
              <i className="fas fa-code-branch"></i>
              <span>{project.forks}</span>
            </div>
          )}
          {project.downloads && (
            <div className="stat">
              <i className="fas fa-download"></i>
              <span>{project.downloads}</span>
            </div>
          )}
          {project.views && (
            <div className="stat">
              <i className="fas fa-eye"></i>
              <span>{project.views}</span>
            </div>
          )}
          {project.likes && (
            <div className="stat">
              <i className="fas fa-heart"></i>
              <span>{project.likes}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects', icon: 'fas fa-th' },
    { id: 'web', label: 'Web Development', icon: 'fas fa-globe' },
    { id: 'app', label: 'Mobile Apps', icon: 'fas fa-mobile-alt' },
    { id: 'design', label: 'UI/UX Design', icon: 'fas fa-paint-brush' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>My <span>Projects</span></h2>
          <p>Showcasing my latest work and achievements</p>
        </div>

        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              <i className={filter.icon}></i>
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
