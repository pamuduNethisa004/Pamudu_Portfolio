// ============================================================
//  Projects.jsx — Featured project cards
// ============================================================

import DATA from '../data';
import { GithubIcon, ExternalLinkIcon } from './Icons';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <p className="section-label reveal">What I've built</p>
        <h2 className="section-title reveal">
          Featured <span>Projects</span>
        </h2>

        <div className="projects__grid">
          {DATA.projects.map((project, i) => (
            <div
              className="project-card reveal"
              key={i}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Thumbnail */}
              <div className="project-card__thumb">
                <span className="project-card__emoji">{project.emoji}</span>
              </div>

              {/* Body */}
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.desc}</p>

                <div className="project-card__tech">
                  {project.tech.map(t => (
                    <span className="skill-pill" key={t}>{t}</span>
                  ))}
                </div>

                <div className="project-card__links">
                  <a
                    className="project-card__link project-card__link--github"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GithubIcon size={14} /> GitHub
                  </a>
                  <a
                    className="project-card__link project-card__link--live"
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLinkIcon size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
