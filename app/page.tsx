import content from '@/data/content';
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

export default function HomePage() {
  return (
    <>
      <RevealInit />
      <Nav
        lang="en"
        profile={content.profile}
        nav={content.ui.nav}
        cvFile={content.profile.cvFile}
      />
      <main>
        <Hero data={content} />
        <About data={content} />
        <Skills data={content} />
        <Experience data={content} />
        <Projects data={content} />
        <EducationLanguages data={content} />
        <Contact data={content} />
      </main>
      <ScrollTop />
    </>
  );
}
