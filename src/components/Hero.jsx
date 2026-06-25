// ============================================================
//  Hero.jsx — Full-screen landing section with Lightfall
// ============================================================

import DATA from '../data';
import useTypewriter from '../hooks/useTypewriter';
import { GithubIcon, LinkedinIcon } from './Icons';
import Lightfall from './Lightfall';
import './Hero.css';

const LIGHTFALL_COLORS = ['#A6C8FF', '#5227FF', '#FF9FFC'];

function Hero() {
  const role = useTypewriter(DATA.roles);

  return (
    <section id="hero" className="hero">
      {/* Lightfall Background */}
      <div className="hero__hyperspeed">
        <Lightfall
          colors={LIGHTFALL_COLORS}
          backgroundColor="#0A0A1A"
          speed={0.5}
          streakCount={2}
          streakWidth={1}
          streakLength={1}
          glow={1}
          density={0.6}
          twinkle={1}
          zoom={3}
          backgroundGlow={0.5}
          opacity={1}
          mouseInteraction
          mouseStrength={0.5}
          mouseRadius={1}
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="hero__overlay" />

      {/* Subtle glow */}
      <div className="hero__glow" />

      {/* Main Content */}
      <div className="hero__content">
        {/* Badge */}
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          {DATA.badge}
        </div>

        {/* Name */}
        <h1 className="hero__name">
          <span className="hero__name-first">{DATA.name.first}</span>
          <span className="hero__name-last">{DATA.name.last}</span>
        </h1>

        {/* Typewriter Role */}
        <div className="hero__role">
          I'm a <span className="hero__role-text">{role}</span>
          <span className="hero__cursor">|</span>
        </div>

        {/* Tagline */}
        <p className="hero__tagline">{DATA.tagline}</p>

        {/* Action Buttons */}
        <div className="hero__actions">
          <a href="#projects" className="btn-primary">View Projects</a>
           <a href="/Pamudu_Jayathunge_CV.pdf" download className="btn-outline" > ⬇ Download CV </a>
          <a href={`mailto:${DATA.email}`} className="btn-outline">✉ Contact Me</a>
        </div>

        {/* Social Icons */}
        <div className="hero__socials">
          <a 
            className="hero__social-icon" 
            href={DATA.github} 
            target="_blank" 
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a 
            className="hero__social-icon" 
            href={DATA.linkedin} 
            target="_blank" 
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        Scroll
      </div>
    </section>
  );
}

export default Hero;