// ============================================================
//  Skills.jsx — Tech skills grouped by category
// ============================================================

import DATA from '../data';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__inner">
        <p className="section-label reveal">What I work with</p>
        <h2 className="section-title reveal">
          Skills & <span>Technologies</span>
        </h2>

        <div className="skills__grid">
          {DATA.skills.map((category, i) => (
            <div
              className="skills__card reveal"
              key={i}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="skills__card-title">
                <span className="skills__card-icon">{category.icon}</span>
                {category.title}
              </div>
              <div className="skills__pills">
                {category.pills.map(pill => (
                  <span className="skill-pill" key={pill}>{pill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
