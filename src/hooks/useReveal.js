// ============================================================
//  useReveal.js — Scroll-triggered fade-in for .reveal elements
//  Watches for NEW elements added to the DOM automatically
// ============================================================

import { useEffect } from 'react';

function useReveal() {
  useEffect(() => {
    const observeElement = (el, scrollObserver) => {
      if (!el.classList.contains('visible')) {
        scrollObserver.observe(el);
      }
    };

    const scrollObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            scrollObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe all existing .reveal elements
    document.querySelectorAll('.reveal').forEach(el => {
      observeElement(el, scrollObserver);
    });

    // Watch for any NEW .reveal elements added to the DOM
    const mutationObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType !== 1) return;
          if (node.classList && node.classList.contains('reveal')) {
            observeElement(node, scrollObserver);
          }
          node.querySelectorAll && node.querySelectorAll('.reveal').forEach(el => {
            observeElement(el, scrollObserver);
          });
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      scrollObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}

export default useReveal;