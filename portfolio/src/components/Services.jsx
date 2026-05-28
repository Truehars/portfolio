import React from 'react';
import { services } from '../data/portfolioData';
import './Services.css';

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>My <span>Services</span></h2>
          <p>What I offer</p>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
