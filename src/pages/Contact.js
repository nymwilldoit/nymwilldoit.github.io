import React, { useEffect, useState } from 'react';
import data from '../data/data.json';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate form submission (replace with real API call)
    await new Promise(resolve => setTimeout(resolve, 2000));

    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">Let's collaborate on your next environmental or AI project</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info" data-aos="fade-right">
              <h2>Contact Information</h2>
              <p>Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h3>Email</h3>
                    <a href={`mailto:${data.site.email}`}>{data.site.email}</a>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <div>
                    <h3>Phone</h3>
                    <a href={`tel:${data.site.phone}`}>{data.site.phone}</a>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <h3>Location</h3>
                    <p>{data.site.location}</p>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link">LinkedIn</a>
                  <a href="#" className="social-link">GitHub</a>
                  <a href="#" className="social-link">Twitter</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper" data-aos="fade-left">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-block"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent! ✓' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <div className="success-message">
                    Thank you! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
