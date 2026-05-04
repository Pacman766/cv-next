import content from '@/data/content';
import ResumeToolbar from '@/components/ResumeToolbar';
import { renderInline } from '@/lib/renderInline';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume — Viktor Kondratsiuk',
};

export default function ResumePage() {
  const { profile, skills, experience, projects, education, languages, about, ui } = content;
  const roles = [...experience.roles].reverse();

  return (
    <>
      <style>{resumeStyles}</style>
      <ResumeToolbar
        backHref="/"
        backBtn={ui.resume.backBtn}
        printBtn={ui.resume.printBtn}
        printBtnShort={ui.resume.printBtnShort}
        toolbarHint={ui.resume.toolbarHint}
      />

      <div className="r-page-wrap">
        <article className="r-page">
          <header className="r-head">
            <div className="r-head-left">
              <h1>{profile.name}</h1>
              <div
                className="r-head-tag"
                dangerouslySetInnerHTML={{
                  __html: `${profile.role} · <strong>4+ years</strong> · JavaScript, TypeScript, React/Next.js, Vue`,
                }}
              />
            </div>
            <div className="r-head-right">
              <span className="r-when">
                Updated {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
              </span>
              <span>{profile.location}</span>
            </div>
          </header>

          <div className="r-grid">
            <aside className="r-col-left">
              <section>
                <h2 className="r-h2">Contact</h2>
                <ul className="r-contact-list">
                  <li>
                    <span className="r-contact-label">Email</span>
                    <a className="r-contact-value" href={`mailto:${profile.email}`}>{profile.email}</a>
                  </li>
                  <li>
                    <span className="r-contact-label">Phone</span>
                    <a className="r-contact-value" href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
                  </li>
                  <li>
                    <span className="r-contact-label">Telegram</span>
                    <a className="r-contact-value" href={`https://t.me/${profile.telegram}`} target="_blank" rel="noopener noreferrer">@{profile.telegram}</a>
                  </li>
                  <li>
                    <span className="r-contact-label">GitHub</span>
                    <a className="r-contact-value" href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer">github.com/{profile.github}</a>
                  </li>
                  <li>
                    <span className="r-contact-label">LinkedIn</span>
                    <a className="r-contact-value" href={`https://www.linkedin.com/in/${profile.linkedin}/`} target="_blank" rel="noopener noreferrer">in/{profile.linkedin}</a>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="r-h2">Skills</h2>
                {skills.groups.map((group, i) => (
                  <div key={i} className="r-skills-block">
                    <h3>{group.title}</h3>
                    <p>{group.items.join(', ')}</p>
                  </div>
                ))}
              </section>

              <section>
                <h2 className="r-h2">Languages</h2>
                <ul className="r-lang-list">
                  {languages.map((lang, i) => (
                    <li key={i}>
                      <span className="r-lang-name">{lang.name}</span>
                      <span className="r-lang-level">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="r-h2">Education</h2>
                <ul className="r-edu-list">
                  {education.map((item, i) => (
                    <li key={i}>
                      <span className="r-edu-school">{item.name}</span>
                      <span className="r-edu-degree">{item.degree}</span>
                      <span className="r-edu-when">{item.when}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </aside>

            <main className="r-col-right">
              <section>
                <h2 className="r-h2">Summary</h2>
                <p
                  className="r-summary"
                  dangerouslySetInnerHTML={{ __html: renderInline(about.lead) }}
                />
              </section>

              <section>
                <h2 className="r-h2">Experience</h2>
                {roles.map((role, i) => (
                  <div key={i} className="r-role">
                    <div className="r-role-head">
                      <span className="r-role-title">{role.title}</span>
                      <span className="r-role-when">{role.when}</span>
                    </div>
                    <div className="r-role-org">{role.org}</div>
                    <div className="r-role-stack">{role.stack}</div>
                    <p
                      className="r-role-summary"
                      dangerouslySetInnerHTML={{ __html: renderInline(role.summary) }}
                    />
                    <ul className="r-bullets">
                      {role.bullets.slice(0, 3).map((bullet, j) => (
                        <li
                          key={j}
                          dangerouslySetInnerHTML={{ __html: renderInline(bullet) }}
                        />
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              <section>
                <h2 className="r-h2">Selected Projects</h2>
                {projects.items.map((project, i) => (
                  <div key={i} className="r-project">
                    <div className="r-project-head">
                      <span className="r-project-title">{project.title}</span>
                      <span className="r-project-when">{project.when}</span>
                    </div>
                    <p
                      className="r-project-lead"
                      dangerouslySetInnerHTML={{ __html: renderInline(project.lead) }}
                    />
                    <div className="r-project-stack">
                      {project.stack.map((s, j) => (
                        <span key={j}>{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            </main>
          </div>

          <div className="r-foot">
            <span>{profile.name}</span>
            <span>Page 1</span>
          </div>
        </article>
      </div>
    </>
  );
}

const resumeStyles = `
:root {
  --r-ink: #18120c;
  --r-ink-2: #3a3530;
  --r-ink-3: #6e665d;
  --r-line: #d8d2c5;
  --r-line-2: #ece7dc;
  --r-paper: #ffffff;
  --r-accent: oklch(0.55 0.12 60);
  --r-display: var(--font-bricolage), "Bricolage Grotesque", sans-serif;
  --r-sans: var(--font-inter), "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --r-mono: var(--font-jetbrains), "JetBrains Mono", ui-monospace, "SF Mono", monospace;
}
body { background: #e8e4dc !important; }

.r-toolbar {
  position: sticky; top: 0; z-index: 20;
  background: rgba(232, 228, 220, 0.92);
  backdrop-filter: saturate(160%) blur(10px);
  -webkit-backdrop-filter: saturate(160%) blur(10px);
  padding: 14px 24px;
  display: flex; flex-wrap: nowrap; justify-content: space-between; align-items: center; gap: 16px;
  border-bottom: 1px solid var(--r-line);
}
.r-toolbar-left {
  font-family: var(--r-mono); font-size: 11px;
  color: var(--r-ink-3); letter-spacing: .04em;
  flex: 1 1 0; min-width: 0;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.r-toolbar-left strong { color: var(--r-ink); font-weight: 600; }
.r-toolbar-actions { display: flex; gap: 10px; flex-shrink: 0; }
.r-tb-btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 9px 16px;
  font-family: var(--r-sans); font-size: 13px; font-weight: 500;
  border-radius: 999px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform .2s ease, background .2s ease, border-color .2s ease;
  background: transparent; color: var(--r-ink);
}
.r-tb-btn:hover { transform: translateY(-1px); }
.r-tb-btn-primary { background: var(--r-ink); color: var(--r-paper); }
.r-tb-btn-primary:hover { background: oklch(0.22 0.01 60); }
.r-tb-btn-ghost { border-color: var(--r-ink-3); }
.r-tb-btn-ghost:hover { border-color: var(--r-ink); }
.r-tb-btn svg { width: 14px; height: 14px; }

.r-page-wrap {
  padding: 32px 16px 48px;
  display: flex; flex-direction: column; align-items: center; gap: 24px;
}
.r-page {
  width: 210mm;
  min-height: 297mm;
  background: var(--r-paper);
  padding: 18mm 16mm;
  box-shadow: 0 1px 2px rgba(0,0,0,.04), 0 12px 40px -8px rgba(0,0,0,.12);
  position: relative;
  font-family: var(--r-sans);
  color: var(--r-ink);
  font-size: 10.5pt;
  line-height: 1.45;
  -webkit-font-smoothing: antialiased;
}
.r-head {
  display: grid; grid-template-columns: 1fr auto;
  align-items: end; gap: 24px;
  padding-bottom: 14px; margin-bottom: 18px;
  border-bottom: 1.5px solid var(--r-ink);
}
.r-head-left h1 {
  font-family: var(--r-display); font-weight: 700;
  font-size: 32pt; letter-spacing: -0.04em; line-height: 0.95;
}
.r-head-tag { margin-top: 8px; font-size: 10pt; color: var(--r-ink-2); }
.r-head-tag strong { color: var(--r-accent); font-weight: 600; }
.r-head-right {
  text-align: right; font-family: var(--r-mono); font-size: 8.5pt;
  color: var(--r-ink-3); line-height: 1.6; letter-spacing: 0.02em;
}
.r-when { display: block; text-transform: uppercase; letter-spacing: 0.08em; }
.r-grid { display: grid; grid-template-columns: 1fr 2.1fr; gap: 12mm; }
.r-col-left > section { margin-bottom: 14px; }
.r-col-right > section { margin-bottom: 14px; }
.r-col-right > section:last-child { margin-bottom: 0; }
.r-h2 {
  font-family: var(--r-mono); font-size: 8.5pt; font-weight: 500;
  letter-spacing: 0.14em; text-transform: uppercase; color: var(--r-accent);
  margin-bottom: 8px; padding-bottom: 4px; border-bottom: 1px solid var(--r-line);
}
.r-contact-list { list-style: none; }
.r-contact-list li { font-size: 9.5pt; margin-bottom: 5px; color: var(--r-ink-2); word-break: break-word; }
.r-contact-label { display: block; font-family: var(--r-mono); font-size: 7.5pt; letter-spacing: 0.08em; text-transform: uppercase; color: var(--r-ink-3); margin-bottom: 1px; }
.r-contact-value { display: block; font-weight: 500; color: var(--r-ink); text-decoration: none; }
.r-skills-block { margin-bottom: 10px; }
.r-skills-block h3 { font-family: var(--r-sans); font-weight: 600; font-size: 9.5pt; color: var(--r-ink); margin-bottom: 4px; }
.r-skills-block p { font-size: 9pt; color: var(--r-ink-2); line-height: 1.45; }
.r-lang-list, .r-edu-list { list-style: none; }
.r-lang-list li, .r-edu-list li { margin-bottom: 8px; font-size: 9.5pt; }
.r-lang-name { font-weight: 600; color: var(--r-ink); }
.r-lang-level { display: block; font-size: 8.5pt; color: var(--r-ink-3); margin-top: 1px; }
.r-edu-school { font-weight: 600; color: var(--r-ink); display: block; }
.r-edu-degree { color: var(--r-ink-2); font-size: 9pt; }
.r-edu-when { font-family: var(--r-mono); font-size: 7.5pt; color: var(--r-ink-3); letter-spacing: 0.06em; text-transform: uppercase; display: block; margin-top: 1px; }
.r-summary { font-size: 10pt; line-height: 1.55; color: var(--r-ink-2); }
.r-role { margin-bottom: 14px; }
.r-role:last-child { margin-bottom: 0; }
.r-role-head { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; flex-wrap: wrap; margin-bottom: 2px; }
.r-role-title { font-family: var(--r-sans); font-weight: 600; font-size: 11pt; color: var(--r-ink); letter-spacing: -0.005em; }
.r-role-when { font-family: var(--r-mono); font-size: 8pt; color: var(--r-ink-3); letter-spacing: 0.06em; text-transform: uppercase; white-space: nowrap; }
.r-role-org { font-size: 9.5pt; color: var(--r-ink-2); margin-bottom: 6px; font-style: italic; }
.r-role-stack { display: inline-block; font-family: var(--r-mono); font-size: 8pt; color: var(--r-accent); letter-spacing: 0.02em; margin-bottom: 6px; }
.r-role-summary { font-size: 9.5pt; color: var(--r-ink-2); margin-bottom: 3px; }
.r-bullets { list-style: none; margin-top: 4px; }
.r-bullets li { position: relative; padding-left: 12px; font-size: 9.5pt; color: var(--r-ink-2); line-height: 1.5; margin-bottom: 3px; }
.r-bullets li::before { content: ""; position: absolute; left: 0; top: 8px; width: 6px; height: 1px; background: var(--r-ink-3); }
.r-project { margin-bottom: 10px; page-break-inside: avoid; break-inside: avoid; }
.r-project:last-child { margin-bottom: 0; }
.r-project-head { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; flex-wrap: wrap; margin-bottom: 2px; }
.r-project-title { font-family: var(--r-sans); font-weight: 600; font-size: 10.5pt; color: var(--r-ink); }
.r-project-when { font-family: var(--r-mono); font-size: 8pt; color: var(--r-ink-3); letter-spacing: 0.06em; text-transform: uppercase; }
.r-project-lead { font-size: 9.5pt; color: var(--r-ink-2); line-height: 1.5; margin-bottom: 5px; }
.r-project-stack { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 5px; }
.r-project-stack span { font-family: var(--r-mono); font-size: 7.5pt; padding: 2px 7px; border: 1px solid var(--r-line); border-radius: 4px; color: var(--r-ink-2); }
.r-foot { margin-top: 16px; padding-top: 8px; border-top: 1px solid var(--r-line); display: flex; justify-content: space-between; font-family: var(--r-mono); font-size: 7.5pt; color: var(--r-ink-3); letter-spacing: 0.06em; text-transform: uppercase; }

.btn-short { display: none; }
@media (max-width: 600px) {
  .btn-long { display: none; }
  .btn-short { display: inline; }
  .r-toolbar-left { display: none; }
  body { overflow-x: hidden; }
  .r-page-wrap { overflow-x: hidden; max-width: 100vw; padding: 16px 0 32px; }
}

@page { size: A4; margin: 12mm 14mm; }
@media print {
  html, body { background: white !important; }
  .r-toolbar { display: none !important; }
  .r-page-wrap { padding: 0; gap: 0; display: block; }
  .r-page { box-shadow: none; margin: 0; padding: 0; width: auto; min-height: 0; page-break-after: auto; }
  .r-head { page-break-after: avoid; break-after: avoid; }
  .r-h2 { page-break-after: avoid; break-after: avoid; }
  .r-role, .r-project, .r-skills-block, .r-edu-list li { page-break-inside: avoid; break-inside: avoid; }
  .r-foot { display: none; }
  body { font-size: 10pt; }
  .r-head-left h1 { font-size: 28pt; }
  .r-grid { gap: 10mm; }
}
`;
