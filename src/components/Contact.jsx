// ============================================================
//  Contact.jsx — Contact section with email & social links
// ============================================================

import DATA from '../data';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <p className="section-label reveal" style={{ justifyContent: 'center' }}>
          Get in touch
        </p>
        <h2 className="section-title reveal" style={{ marginBottom: '20px' }}>
          Let's <span>work together</span>
        </h2>
        <p className="contact__subtitle reveal">
          I'm currently looking for internship opportunities. Whether you have a project
          in mind or just want to say hi, my inbox is always open!
        </p>

        <a href={`mailto:${DATA.email}`} className="contact__email reveal">
          {DATA.email}
        </a>

        <div className="contact__socials reveal">
          <a className="contact__social-btn" href={DATA.github} target="_blank" rel="noreferrer">
            <GithubIcon size={16} /> GitHub
          </a>
          <a className="contact__social-btn" href={DATA.linkedin} target="_blank" rel="noreferrer">
            <LinkedinIcon size={16} /> LinkedIn
          </a>
          <a className="contact__social-btn" href={DATA.twitter} target="_blank" rel="noreferrer">
            <TwitterIcon size={16} /> Twitter
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
