import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import data from '../data/data.json';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Progress bar
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPercent = (window.scrollY / windowHeight) * 100;
      const progressBar = document.querySelector('.nav-progress');
      if (progressBar) {
        progressBar.style.width = scrolledPercent + '%';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav id="navbar" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-progress"></div>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <span className="logo-icon">🌿</span>
          <span className="logo-text">{data.site.name}</span>
        </Link>

        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
          <li><Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
