import type { CVData } from '@/data/types';

interface EducationLanguagesProps {
  data: CVData;
}

export default function EducationLanguages({ data }: EducationLanguagesProps) {
  const { education, languages, ui } = data;

  return (
    <section className="section section-edu" id="education">
      <div className="edu-grid">
        {/* Education */}
        <div className="edu-block reveal">
          <span className="kicker">{ui.kickers.kickerEducation}</span>
          <h2 className="section-title">{ui.sections.educationTitle}</h2>
          {education.map((item, i) => (
            <div key={i} className="edu-card">
              <div className="edu-when">{item.when}</div>
              <div className="edu-what">
                <h3>{item.name}</h3>
                <p>{item.degree}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="edu-block reveal">
          <span className="kicker">{ui.kickers.kickerLanguages}</span>
          <h2 className="section-title">{ui.sections.languagesTitle}</h2>
          <ul className="lang-list">
            {languages.map((lang, i) => (
              <li key={i}>
                <span>{lang.name}</span>
                <span className="lang-level">{lang.level}</span>
                <div
                  className="lang-bar"
                  style={{ '--pct': `${lang.pct}%` } as React.CSSProperties}
                >
                  <span style={{ width: `${lang.pct}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
