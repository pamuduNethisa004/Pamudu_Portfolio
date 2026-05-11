// ============================================================
//  Hero.jsx — Full-screen landing section
// ============================================================

import DATA from '../data';
import useTypewriter from '../hooks/useTypewriter';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import './Hero.css';

function Hero() {
  const role = useTypewriter(DATA.roles);

  return (
    <section id="hero" className="hero">
      {/* Background grid */}
      <div className="hero__grid" />

      {/* Blue glow blob */}
      <div className="hero__glow" />

      {/* Main content */}
      <div className="hero__content">
        {/* Available badge */}
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          {DATA.badge}
        </div>

        {/* Name */}
        <h1 className="hero__name">
          <span className="hero__name-first">{DATA.name.first} </span>
          <span className="hero__name-last">{DATA.name.last}</span>
        </h1>

        {/* Typewriter role */}
        <div className="hero__role">
          I'm a <span className="hero__role-text">{role}</span>
          <span className="hero__cursor">|</span>
        </div>

        {/* Tagline */}
        <p className="hero__tagline">{DATA.tagline}</p>

        {/* Action buttons */}
        <div className="hero__actions">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#" className="btn-outline">⬇ Download CV</a>
          <a href={`mailto:${DATA.email}`} className="btn-outline">✉ Contact Me</a>
        </div>

        {/* Social icons */}
        <div className="hero__socials">
          <a className="hero__social-icon" href={DATA.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a className="hero__social-icon" href={DATA.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a className="hero__social-icon" href={DATA.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
            <TwitterIcon />
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        Scroll
      </div>
    </section>
  );
}

export default Hero;
