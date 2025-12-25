import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import data from '../data/data.json';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = data.projects.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="project-detail-page">
        <section className="page-header">
          <div className="container">
            <h1>Project Not Found</h1>
            <Link to="/portfolio" className="btn btn-primary">Back to Portfolio</Link>
          </div>
        </section>
      </div>
    );
  }

  // Get related projects (same category)
  const relatedProjects = data.projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="project-detail-page">
      {/* Project Header */}
      <section className="project-header">
        <div className="container">
          <button onClick={() => navigate(-1)} className="back-button">
            ← Back
          </button>
          <div className="project-header-content">
            <span className="project-category-badge">{project.category}</span>
            <h1 className="project-title-large">{project.title}</h1>
            <p className="project-description-large">{project.description}</p>
            <div className="project-tags-large">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag-large">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="project-content section">
        <div className="container">
          <div className="project-details">
            <h2>Project Overview</h2>
            <p>{project.details}</p>

            <h2>Key Features</h2>
            <ul className="project-features">
              <li>Advanced machine learning algorithms</li>
              <li>Real-time data processing</li>
              <li>Interactive visualization dashboards</li>
              <li>Scalable cloud infrastructure</li>
            </ul>

            <h2>Technologies Used</h2>
            <div className="project-tech">
              {project.tags.map((tag, i) => (
                <div key={i} className="tech-badge-large">
                  <span>🔧</span> {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="related-projects section section-dark">
          <div className="container">
            <h2 className="section-title">Related Projects</h2>
            <div className="portfolio-grid">
              {relatedProjects.map((relProject) => (
                <Link 
                  key={relProject.id} 
                  to={`/project/${relProject.id}`}
                  className="portfolio-card"
                >
                  <div className="portfolio-card-header">
                    <span className="portfolio-category">{relProject.category}</span>
                  </div>
                  <div className="portfolio-card-body">
                    <h3 className="portfolio-title">{relProject.title}</h3>
                    <p className="portfolio-description">{relProject.description}</p>
                  </div>
                  <div className="portfolio-card-footer">
                    <span className="portfolio-link">View Details →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="project-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Interested in a Similar Project?</h2>
            <p>Let's discuss how we can help with your environmental challenges</p>
            <Link to="/contact" className="btn btn-primary btn-large">Get In Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetail;
