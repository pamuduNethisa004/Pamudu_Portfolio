// ============================================================
//  useReveal.js — Scroll-triggered fade-in for .reveal elements
// ============================================================

import { useEffect } from 'react';

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default useReveal;
