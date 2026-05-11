// ============================================================
//  Nav.jsx — Fixed top navigation bar
// ============================================================

import { useState, useEffect } from 'react';
import DATA from '../data';
import './Nav.css';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      {/* Logo */}
      <div className="nav__logo">
        {DATA.name.first}<span className="nav__logo-dot">.</span>
      </div>

      {/* Desktop Links */}
      <ul className="nav__links">
        {NAV_LINKS.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`}>{link}</a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href={`mailto:${DATA.email}`} className="nav__cta">
        Hire Me
      </a>

      {/* Mobile hamburger */}
      <button
        className="nav__hamburger"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="nav__mobile-menu">
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Nav;
