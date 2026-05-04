import contentRu from '@/data/content-ru';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import EducationLanguages from '@/components/EducationLanguages';
import Contact from '@/components/Contact';
import ScrollTop from '@/components/ScrollTop';
import RevealInit from '@/components/RevealInit';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Виктор Кондратюк — Веб-разработчик',
  description:
    'Виктор Кондратюк — Веб-разработчик с 4 годами опыта в JavaScript, TypeScript, React/Next.js и Vue. Открыт к новым предложениям.',
};

export default function RuPage() {
  return (
    <>
      <RevealInit />
      <Nav
        lang="ru"
        profile={contentRu.profile}
        nav={contentRu.ui.nav}
        cvFile={contentRu.profile.cvFile}
      />
      <main>
        <Hero data={contentRu} lang="ru" />
        <About data={contentRu} />
        <Skills data={contentRu} />
        <Experience data={contentRu} />
        <Projects data={contentRu} />
        <EducationLanguages data={contentRu} />
        <Contact data={contentRu} />
      </main>
      <ScrollTop />
    </>
  );
}
