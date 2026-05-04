import type { CVData } from '@/data/types';
import { renderInline } from '@/lib/renderInline';

interface ExperienceProps {
  data: CVData;
}

export default function Experience({ data }: ExperienceProps) {
  const { experience, ui } = data;

  return (
    <section className="section" id="experience">
      <div className="section-head">
        <span className="kicker">{ui.kickers.kickerExperience}</span>
        <h2 className="section-title">{experience.heading}</h2>
      </div>
      <ol className="timeline">
        {experience.roles.map((role, i) => (
          <li key={i} className="tl-item reveal">
            <div className="tl-rail">
              <span className="tl-dot" />
            </div>
            <div className="tl-body">
              <div className="tl-head">
                <span>{role.when}</span>
                {role.current && <span className="tl-tag">Current</span>}
              </div>
              <div className="tl-role">{role.title}</div>
              <div className="tl-org">{role.org}</div>
              <div className="tl-stack">{role.stack}</div>
              <p
                dangerouslySetInnerHTML={{ __html: renderInline(role.summary) }}
              />
              <ul className="tl-bullets">
                {role.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    dangerouslySetInnerHTML={{ __html: renderInline(bullet) }}
                  />
                ))}
              </ul>
              <div className="tl-chips">
                {role.chips.map((chip, j) => (
                  <span key={j}>{chip}</span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
