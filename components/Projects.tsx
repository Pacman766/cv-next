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

      <div className="side-projects">
        <h3 className="side-heading">{projects.sideHeading}</h3>
        {projects.sideItems.map((project, i) => (
          <article key={i} className="project reveal">
            <div className="project-meta">
              <span className="project-num">S{String(i + 1).padStart(2, '0')}</span>
              <span>{project.when}</span>
              <span>{project.role}</span>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p
              className="project-lead"
              dangerouslySetInnerHTML={{ __html: renderInline(project.lead) }}
            />
            {(project.repo || project.demo) && (
              <div className="project-links">
                {project.repo && (
                  <a
                    className="project-link"
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    className="project-link"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo
                  </a>
                )}
              </div>
            )}
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
