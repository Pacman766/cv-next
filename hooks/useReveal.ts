'use client';
import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>('.reveal');
    const revealLines = document.querySelectorAll<HTMLElement>('.reveal-line');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            // Staggered delay for grouped children
            const parent = el.parentElement;
            if (parent) {
              const siblings = Array.from(
                parent.querySelectorAll(':scope > .reveal, :scope > .reveal-line')
              );
              const idx = siblings.indexOf(el);
              if (idx > 0) {
                el.style.transitionDelay = `${idx * 0.08}s`;
              }
            }
            el.classList.add('is-in');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    const allEls = [...Array.from(revealEls), ...Array.from(revealLines)];
    allEls.forEach((el) => observer.observe(el));

    // Immediately reveal elements already in viewport
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        allEls.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) {
            el.classList.add('is-in');
            observer.unobserve(el);
          }
        });
      });
    });

    return () => observer.disconnect();
  }, []);
}
