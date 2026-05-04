import type { CVData } from '@/data/types';
import Link from 'next/link';

interface ContactProps {
  data: CVData;
}

export default function Contact({ data }: ContactProps) {
  const { contact, profile, ui } = data;

  const cards = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      static: false,
    },
    {
      label: 'Telegram',
      value: `@${profile.telegram}`,
      href: `https://t.me/${profile.telegram}`,
      static: false,
    },
    {
      label: 'GitHub',
      value: `github.com/${profile.github}`,
      href: `https://github.com/${profile.github}`,
      static: false,
    },
    {
      label: 'LinkedIn',
      value: `in/${profile.linkedin}`,
      href: `https://www.linkedin.com/in/${profile.linkedin}/`,
      static: false,
    },
    {
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
      static: true,
    },
    {
      label: 'Location',
      value: profile.location,
      href: null,
      static: true,
    },
  ];

  return (
    <>
      <section className="section section-contact" id="contact">
        <div className="contact-inner">
          <span className="kicker">{ui.kickers.kickerContact}</span>
          <h2 className="contact-title reveal">{contact.heading}</h2>
          <p className="contact-sub reveal">{contact.subtitle}</p>

          <div className="contact-grid">
            {cards.map((card, i) =>
              card.href ? (
                <a
                  key={i}
                  className={`contact-card${card.static ? ' contact-card--static' : ''}`}
                  href={card.href}
                  {...(!card.static && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  <span className="contact-label">{card.label}</span>
                  <span className="contact-value">{card.value}</span>
                  {!card.static && (
                    <span className="contact-arrow" aria-hidden="true">
                      ↗
                    </span>
                  )}
                </a>
              ) : (
                <div key={i} className="contact-card contact-card--static">
                  <span className="contact-label">{card.label}</span>
                  <span className="contact-value">{card.value}</span>
                </div>
              )
            )}
          </div>

          <div className="contact-cta">
            <a
              className="btn btn-primary btn-lg"
              href={`mailto:${profile.email}`}
            >
              {ui.contactCTA.emailBtn}
            </a>
            <Link className="btn btn-ghost btn-lg" href={profile.cvFile}>
              {ui.contactCTA.downloadBtn}
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-row">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{ui.footer.footerCredit}</span>
        </div>
      </footer>
    </>
  );
}
