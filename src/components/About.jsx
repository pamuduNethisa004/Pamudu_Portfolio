// ============================================================
//  About.jsx — About me section with stats
// ============================================================

import DATA from '../data';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about__grid">

        {/* Left: text */}
        <div className="about__left">
          <p className="section-label reveal">About Me</p>
          <h2 className="section-title reveal">
            Crafting digital<br /><span>experiences</span>
          </h2>

          {DATA.about.map((paragraph, i) => (
            <p key={i} className="about__paragraph reveal">
              {paragraph}
            </p>
          ))}

          <div className="about__tags reveal">
            {DATA.aboutTags.map(tag => (
              <span className="about__tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Right: stat cards */}
        <div className="about__stats">
          {DATA.stats.map((stat, i) => (
            <div
              className="about__stat-card reveal"
              key={i}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="about__stat-number">{stat.number}</div>
              <div className="about__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;
