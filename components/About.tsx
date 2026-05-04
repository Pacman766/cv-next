import type { CVData } from '@/data/types';
import { renderInline } from '@/lib/renderInline';

interface AboutProps {
  data: CVData;
}

export default function About({ data }: AboutProps) {
  const { about, ui } = data;

  return (
    <section className="section" id="about">
      <div className="section-head">
        <span className="kicker">{ui.kickers.kickerAbout}</span>
        <h2 className="section-title">{about.heading}</h2>
      </div>
      <div className="about-grid">
        <p className="about-lead reveal">{about.lead}</p>
        <ul className="about-points">
          {about.points.map((point, i) => (
            <li
              key={i}
              className="reveal"
              dangerouslySetInnerHTML={{ __html: renderInline(point) }}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
