import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data.json';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🌿</span>
              <span className="logo-text">{data.site.name}</span>
            </div>
            <p className="footer-description">{data.site.tagline}</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <ul className="footer-contact">
              <li>📧 {data.site.email}</li>
              <li>📱 {data.site.phone}</li>
              <li>📍 {data.site.location}</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Technologies</h3>
            <div className="footer-tech">
              {data.technologies.slice(0, 4).map((tech, index) => (
                <span key={index} className="tech-badge">{tech.icon} {tech.name}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {data.site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
