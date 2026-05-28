import React, { useState } from 'react';
import { personalInfo, social } from '../data/portfolioData';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact <span>Me</span></h2>
          <p>Get in touch</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-text">
                <h3>Location</h3>
                <p>{personalInfo.location}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-text">
                <h3>Email</h3>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="info-text">
                <h3>Phone</h3>
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </div>
            </div>

            <div className="social-card">
              <h3>Follow Me</h3>
              <div className="social-icons">
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={social.github} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-github"></i>
                </a>
                <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
            {submitted && (
              <div className="success-message">
                <i className="fas fa-check-circle"></i> Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
