import type { CVData } from '@/data/types';
import { renderInline } from '@/lib/renderInline';

interface ProjectsProps {
  data: CVData;
}

export default function Projects({ data }: ProjectsProps) {
  const { projects, ui } = data;

  return (
    <section className="section section-projects" id="projects">
      <div className="section-head">
        <span className="kicker">{ui.kickers.kickerProjects}</span>
        <h2 className="section-title">{projects.heading}</h2>
      </div>
      <div>
        {projects.items.map((project, i) => (
          <article key={i} className="project reveal">
            <div className="project-meta">
              <span className="project-num">{String(i + 1).padStart(2, '0')}</span>
              <span>{project.when}</span>
              <span>{project.role}</span>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p
              className="project-lead"
              dangerouslySetInnerHTML={{ __html: renderInline(project.lead) }}
            />
            <div className="project-cols">
              <div>
                <h4>What I did</h4>
                <ul>
                  {project.did.map((item, j) => (
                    <li
                      key={j}
                      dangerouslySetInnerHTML={{ __html: renderInline(item) }}
                    />
                  ))}
                </ul>
              </div>
              <div>
                <h4>Stack</h4>
                <div className="chips">
                  {project.stack.map((s, j) => (
                    <span key={j}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
