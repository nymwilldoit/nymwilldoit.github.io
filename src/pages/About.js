import React, { useEffect } from 'react';
import data from '../data/data.json';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    animateCounters();
  }, []);

  const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number-large');
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
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">{data.about.title}</p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content section">
        <div className="container">
          <div className="content-grid">
            <div className="content-block" data-aos="fade-right">
              <h2 className="content-title">Our Mission</h2>
              <p className="content-text">{data.about.description}</p>
            </div>

            <div className="content-block" data-aos="fade-left">
              <h2 className="content-title">What We Do</h2>
              <p className="content-text">{data.about.mission}</p>
            </div>

            <div className="content-block" data-aos="fade-right">
              <h2 className="content-title">Our Approach</h2>
              <p className="content-text">{data.about.values}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-large section section-dark">
        <div className="container">
          <h2 className="section-title">Our Impact</h2>
          <div className="stats-grid-large">
            {data.stats.map((stat, index) => (
              <div key={index} className="stat-item-large" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="stat-number-large" data-count={stat.value}>0</div>
                <div className="stat-label-large">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="about-technologies section">
        <div className="container">
          <h2 className="section-title">Technologies & Tools</h2>
          <p className="section-subtitle">We leverage cutting-edge technologies</p>
          <div className="tech-grid">
            {data.technologies.map((tech, index) => (
              <div key={index} className="tech-item" data-aos="fade-up" data-aos-delay={index * 50}>
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
