import Image from 'next/image';
import type { CVData } from '@/data/types';
import { renderInline } from '@/lib/renderInline';

interface HeroProps {
  data: CVData;
  lang?: string;
}

export default function Hero({ data, lang }: HeroProps) {
  const { profile, hero, ui } = data;

  const initials = profile.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <section className={`hero${lang === 'ru' ? ' hero--ru' : ''}`} id="top">
      <div className="hero-inner">
        {/* Availability badge */}
        <div className="hero-meta reveal">
          <span className="dot" />
          <span>{profile.availabilityNote}</span>
        </div>

        {/* Animated title */}
        <h1 className="hero-title">
          {hero.titleLines.map((line, i) => (
            <span key={i} className="reveal-line">
              <span dangerouslySetInnerHTML={{ __html: renderInline(line) }} />
            </span>
          ))}
        </h1>

        {/* Portrait */}
        <div className="hero-portrait">
          <div className={`portrait${profile.photo ? ' has-photo' : ''}`} id="portrait-slot">
            {profile.photo ? (
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                unoptimized
                className="portrait-img"
                priority
              />
            ) : null}
            <span className="portrait-mono">{initials}</span>
            <span className="portrait-cap">Photo placeholder</span>
          </div>
          <div className="portrait-orbit" />
        </div>

        {/* Subtitle */}
        <p
          className="hero-sub reveal"
          dangerouslySetInnerHTML={{ __html: renderInline(hero.subtitle) }}
        />

        {/* CTA buttons */}
        <div className="hero-actions reveal">
          <a className="btn btn-primary" href="#projects">
            <span>{ui.hero.ctaWork}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            className="btn btn-ghost"
            href={`mailto:${profile.email}`}
          >
            {ui.hero.ctaContact}
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          {hero.stats.map((stat, i) => (
            <div key={i} className="stat reveal">
              <span className="stat-num">{stat.num}</span>
              <span className="stat-lbl">
                {stat.label[0]}
                <br />
                {stat.label[1]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
