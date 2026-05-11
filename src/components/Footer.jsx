// ============================================================
//  Footer.jsx
// ============================================================

import DATA from '../data';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <span>© {year} {DATA.name.first} {DATA.name.last}. All rights reserved.</span>
      <span>Built with React ⚡</span>
    </footer>
  );
}

export default Footer;
