import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data.json';

function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(data.projects);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(data.projects);
    } else {
      setFilteredProjects(data.projects.filter(p => p.category === filter));
    }
  }, [filter]);

  const categories = ['All', ...new Set(data.projects.map(p => p.category))];

  return (
    <div className="portfolio-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Our Portfolio</h1>
          <p className="page-subtitle">Showcasing our innovative environmental and AI projects</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="portfolio-filter section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio-grid-section section">
        <div className="container">
          <div className="portfolio-grid">
            {filteredProjects.map((project, index) => (
              <Link 
                key={project.id} 
                to={`/project/${project.id}`}
                className="portfolio-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="portfolio-card-header">
                  <span className="portfolio-category">{project.category}</span>
                </div>
                <div className="portfolio-card-body">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                  <div className="portfolio-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="portfolio-card-footer">
                  <span className="portfolio-link">View Details →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
