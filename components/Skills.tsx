import type { CVData } from '@/data/types';

interface SkillsProps {
  data: CVData;
}

export default function Skills({ data }: SkillsProps) {
  const { skills, ui } = data;

  return (
    <section className="section section-skills" id="skills">
      <div className="section-head">
        <span className="kicker">{ui.kickers.kickerSkills}</span>
        <h2 className="section-title">{skills.heading}</h2>
        <p className="section-sub">{skills.subtitle}</p>
      </div>
      <div className="skills-grid">
        {skills.groups.map((group, i) => (
          <div key={i} className="skill-card reveal">
            <span className="skill-num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
