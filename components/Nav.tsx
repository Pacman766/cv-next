'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { CVData } from '@/data/types';

interface NavProps {
  lang: 'en' | 'ru';
  profile: CVData['profile'];
  nav: CVData['ui']['nav'];
  cvFile: string;
}

export default function Nav({ lang, profile, nav, cvFile }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const initials = profile.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: '#about', label: nav.navAbout },
    { href: '#skills', label: nav.navSkills },
    { href: '#experience', label: nav.navExperience },
    { href: '#projects', label: nav.navProjects },
    { href: '#contact', label: nav.navContact },
  ];

  return (
    <>
      <header
        ref={navRef}
        className={`topnav${scrolled ? ' scrolled' : ''}`}
        id="topnav"
      >
        <a href="#top" className="brand">
          <span className="brand-mark">{initials}</span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="lang-switch">
          <Link
            href="/"
            className={`lang-btn${lang === 'en' ? ' active' : ''}`}
          >
            EN
          </Link>
          <span className="lang-sep">·</span>
          <Link
            href="/ru"
            className={`lang-btn${lang === 'ru' ? ' active' : ''}`}
          >
            RU
          </Link>
        </div>

        <Link href={cvFile} className="nav-cta">
          <span>{nav.downloadCV}</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </Link>

        <button
          className="nav-burger"
          id="nav-burger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div
        className={`mobile-nav${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <button
          className="mobile-nav-close"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}

        <div className="mobile-nav-divider" />

        <div className="lang-switch">
          <Link
            href="/"
            className={`lang-btn${lang === 'en' ? ' active' : ''}`}
            onClick={closeMenu}
          >
            EN
          </Link>
          <span className="lang-sep">·</span>
          <Link
            href="/ru"
            className={`lang-btn${lang === 'ru' ? ' active' : ''}`}
            onClick={closeMenu}
          >
            RU
          </Link>
        </div>

        <Link href={cvFile} className="mobile-nav-cta" onClick={closeMenu}>
          <span>{nav.downloadCV}</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </Link>
      </div>
    </>
  );
}
