import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data.json';

function Home() {
  useEffect(() => {
    // Initialize animations
    initScrollAnimations();
    animateCounters();
  }, []);

  const initScrollAnimations = () => {
    const elements = document.querySelectorAll('[data-aos]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    elements.forEach(el => observer.observe(el));
  };

  const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          const target = entry.target;
          const count = parseInt(target.getAttribute('data-count'));
          let current = 0;
          const increment = count / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= count) {
              target.textContent = count + (count === 98 ? '%' : '+');
              clearInterval(timer);
            } else {
              target.textContent = Math.floor(current) + (count === 98 ? '%' : '+');
            }
          }, 40);
          target.classList.add('counted');
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container hero-container">
          <div className="hero-content" data-aos="fade-up">
            <h1 className="hero-title">{data.hero.title}</h1>
            <p className="hero-subtitle">{data.hero.subtitle}</p>
            <div className="hero-buttons">
              <Link to="/portfolio" className="btn btn-primary">{data.hero.cta}</Link>
              <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Our Expertise</h2>
            <p className="section-subtitle">Comprehensive solutions for environmental challenges</p>
          </div>

          <div className="feature-grid">
            {data.features.map((feature, index) => (
              <div 
                key={feature.id} 
                className="feature-card" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <Link to="/portfolio" className="feature-link">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats section section-dark">
        <div className="container">
          <div className="stats-grid">
            {data.stats.map((stat, index) => (
              <div 
                key={index} 
                className="stat-item" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="stat-number" data-count={stat.value}>0+</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Technologies We Use</h2>
            <p className="section-subtitle">Modern tools for cutting-edge solutions</p>
          </div>

          <div className="tech-grid">
            {data.technologies.map((tech, index) => (
              <div 
                key={index} 
                className="tech-item" 
                data-aos="zoom-in" 
                data-aos-delay={index * 50}
              >
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's work together to create innovative environmental solutions</p>
            <Link to="/contact" className="btn btn-primary btn-large">Contact Us Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
