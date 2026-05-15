// ============================================================
//  Hero.jsx — Full-screen landing section
// ============================================================

import { useMemo } from 'react';
import DATA from '../data';
import useTypewriter from '../hooks/useTypewriter';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import Hyperspeed from './Hyperspeed';
import './Hero.css';

const HYPERSPEED_OPTIONS = {
  onSpeedUp: () => {},
  onSlowDown: () => {},
  distortion: 'LongRaceDistortion',
  length: 400,
  roadWidth: 10,
  islandWidth: 5,
  lanesPerRoad: 2,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 50,
  lightPairsPerRoadWay: 70,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [-120, -160],
  carLightsLength: [20, 60],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.2, 0.2],
  carFloorSeparation: [0.05, 1],
  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x000000,
    shoulderLines: 0x131318,
    brokenLines: 0x131318,
    leftCars: [0xff5f73, 0xe74d60, 0xff102a],
    rightCars: [0xa4e3e6, 0x80d1d4, 0x53c2c6],
    sticks: 0xa4e3e6,
  },
};

function Hero() {
  const role = useTypewriter(DATA.roles);

  return (
    <section id="hero" className="hero">
      {/* Hyperspeed background */}
      <div className="hero__hyperspeed">
        <Hyperspeed effectOptions={HYPERSPEED_OPTIONS} />
      </div>

      {/* Dark overlay so text stays readable */}
      <div className="hero__overlay" />

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