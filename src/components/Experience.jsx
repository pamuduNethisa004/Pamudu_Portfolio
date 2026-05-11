// ============================================================
//  Experience.jsx — Education & Experience timeline
// ============================================================

import DATA from '../data';
import './Experience.css';

function TimelineItem({ item, delay }) {
  return (
    <div
      className="timeline-item reveal"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="timeline-item__date">{item.date}</div>
      <div className="timeline-item__title">{item.title}</div>
      <div className="timeline-item__org">{item.org}</div>
      <div className="timeline-item__desc">{item.desc}</div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__inner">
        <p className="section-label reveal">My journey</p>
        <h2 className="section-title reveal">
          Education & <span>Experience</span>
        </h2>

        <div className="experience__grid">
          {/* Education column */}
          <div className="experience__col">
            <h3 className="experience__col-title">🎓 Education</h3>
            {DATA.education.map((item, i) => (
              <TimelineItem key={i} item={item} delay={i * 0.1} />
            ))}
          </div>

          {/* Experience column */}
          <div className="experience__col">
            <h3 className="experience__col-title">💼 Experience</h3>
            {DATA.experience.map((item, i) => (
              <TimelineItem key={i} item={item} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
