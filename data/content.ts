import type { CVData } from './types';

const content: CVData = {
  profile: {
    name: 'Viktor Kondratsiuk',
    role: 'Web Developer',
    location: 'Minsk, Belarus',
    email: '3334976@gmail.com',
    phone: '+375 29 766 04 37',
    telegram: 'viktor_kondratsiuk',
    linkedin: 'viktor-kondratsiuk',
    github: 'Pacman766',
    photo: '/uploads/VIK.jpg',
    available: true,
    availabilityNote: 'Available for new opportunities',
    cvFile: '/resume',
  },
  hero: {
    titleLines: [
      "Hi, I'm Viktor.",
      'I build _scalable_',
      'web applications.',
    ],
    subtitle:
      'Web Developer with **4 years** of experience crafting high-performance frontends with JavaScript, TypeScript, React/Next.js and Vue — currently helping a banking-sector EDMS scale at [Isida-Informatica](#experience).',
    stats: [
      { num: '4', label: ['Years building', 'for production'] },
      { num: '15+', label: ['Modern frameworks', '& tools'] },
      { num: 'EDMS', label: ['Banking-sector', 'at scale'] },
      { num: 'Minsk', label: ['Belarus', '(remote-friendly)'] },
    ],
  },
  about: {
    heading: 'A frontend developer who cares about the seams.',
    lead: 'I build scalable, high-performance web applications using JavaScript (ES6+), TypeScript, React, Next.js, Vue and Java. Most of my time is spent in the messy middle — component architecture, state management, API integration, and the small performance details that decide whether a product feels solid or sluggish.',
    points: [
      '**Component-driven.** Reusable UI patterns, modular architecture, design-system thinking.',
      '**State & data.** Redux Toolkit, RTK Query, Context API, TanStack Query, Apollo.',
      '**Performance.** Lazy loading, memoization, code-splitting, render profiling.',
      '**Quality.** ESLint, Prettier, Vitest, Playwright, Cypress — clean, maintainable code.',
      '**Full-cycle.** Java EE backends, REST API design, CI/CD with TeamCity, Git.',
    ],
  },
  skills: {
    heading: 'The toolbox.',
    subtitle: 'Grouped by where they actually live in my day-to-day.',
    groups: [
      {
        title: 'Languages',
        items: ['JavaScript (ES6, ES8)', 'TypeScript', 'Java EE (MVC, JPA, REST API)'],
      },
      {
        title: 'Frontend frameworks',
        items: [
          'React — Hooks, Context, Router v6, Suspense, Error Boundaries',
          'Next.js',
          'Vue 2 / 3, Vuex, Pinia',
          'ExtJS (Sencha)',
        ],
      },
      {
        title: 'State & data',
        items: [
          'Redux, Redux Toolkit, RTK Query',
          'React Query / TanStack Query',
          'GraphQL (Apollo)',
          'REST · Axios · JWT',
        ],
      },
      {
        title: 'Styling & UI',
        items: [
          'HTML5, CSS, SCSS/SASS, CSS Modules',
          'Tailwind, Styled Components',
          'Material UI, Ant Design, Bootstrap, Vuetify',
        ],
      },
      {
        title: 'Build & quality',
        items: ['Vite, Webpack, Babel', 'ESLint, Prettier', 'Vitest, Playwright, Cypress'],
      },
      {
        title: 'Backend & infra',
        items: [
          'Java EE — REST, MVC, JPA, Hibernate',
          'Tomcat, WildFly',
          'MySQL, PostgreSQL, Oracle SQL',
          'Git, GitHub, SVN · TeamCity',
        ],
      },
      {
        title: 'Headless CMS',
        items: ['Strapi (v4 / v5)', 'Payload'],
      },
      {
        title: 'Tools & environment',
        items: [
          'Figma, Photoshop',
          'VS Code, Cursor, Zed, IntelliJ IDEA',
          'YouTrack · Windows / Linux (Ubuntu)',
          'Claude, GPT (Codex), Gemini',
        ],
      },
    ],
  },
  experience: {
    heading: "Where I've been shipping.",
    roles: [
      {
        title: 'Middle Web Developer',
        when: 'Apr 2024 — Present',
        org: 'Isida-Informatica, LLC · Minsk, Belarus',
        stack: 'JS · ExtJS · React/Next.js · Java',
        current: true,
        summary:
          'Lead development and optimization of core EDMS modules for the banking sector — scalability, security, and high performance.',
        bullets: [
          'Implemented Scan Session and Advanced Search Session modules serving banking-sector users.',
          'Refactored a legacy frontend codebase to modern ES6+ and modular architecture; introduced React, Next.js, TypeScript and reusable UI patterns.',
          'Established state-management patterns (Redux Toolkit, RTK Query, Context API) and code-quality tooling (ESLint, Prettier).',
        ],
        chips: [
          'TypeScript',
          'Next.js',
          'Apollo / GraphQL',
          'RTK Query',
          'Styled Components',
          'Tailwind',
          'Vite',
          'Vitest',
          'Playwright',
          'Cypress',
        ],
      },
      {
        title: 'Junior Web Developer',
        when: 'Apr 2022 — Apr 2024',
        org: 'Isida-Informatica, LLC · Minsk, Belarus',
        stack: 'JS · ExtJS · Vue.js · Java',
        summary:
          'Built full-stack features for a large-scale electronic document management system used in banking.',
        bullets: [
          'Developed and maintained backend functionality in Java — document workflows and integrations.',
          'Conducted code reviews and resolved production bugs across frontend and backend layers.',
        ],
        chips: ['ExtJS', 'Vue.js', 'Vuetify', 'Java', 'REST', 'SQL', 'SVN', 'Webpack', 'Vitest'],
      },
    ],
  },
  projects: {
    heading: "Three modules I'm proud of.",
    items: [
      {
        title: 'Scan Session',
        when: 'Jan 2025 — Mar 2025',
        role: 'Middle Web Developer',
        lead: 'A Chrome-like document scanning module with zoom, rotation, fit-to-height/width, and page deletion. Synchronized scrolling and selection between sidebar and main viewer via Intersection Observer; integrated with both a Chrome extension and a desktop app for real-time editing.',
        did: [
          'Designed the full scanning workflow with persistent state via React Hooks & Context API.',
          'Built advanced manipulation (zoom, rotate, delete, fit) with optimized re-renders via `React.memo` and `useCallback`.',
          'Modular UI with React Bootstrap, Tailwind, Styled Components.',
          'RTK Query for caching and real-time backend sync.',
          'Refactored core logic to TypeScript; configured Vite, ESLint, Prettier.',
          'Designed REST endpoints alongside backend; defined Java EE data models.',
        ],
        stack: ['React', 'TypeScript', 'RTK Query', 'Tailwind', 'Styled Components', 'Axios', 'Vite', 'Java EE'],
      },
      {
        title: 'Advanced Search Session — EDMS',
        when: 'Mar 2024 — May 2024',
        role: 'Middle Web Developer',
        lead: 'A comprehensive search inside the EDMS that lets users build fully customized queries on flexible criteria. Each field is generated dynamically based on document class, user role, access permissions, and search-form context (resolution issuance, mailing, archiving, etc.). Users construct SQL-like queries with _contains / starts with / does not include / and / or / except_, save and load templates, merge results, and navigate search history.',
        did: [
          'Refactored and optimized the existing search engine for speed, scalability, and maintainability.',
          'Dynamic field generation based on document class, role, and access rights.',
          'Query builder with logical operators and advanced combinations.',
          'Custom template save/load and result-merging UX.',
          'Search-history navigation that lets users revisit and modify past queries.',
          'Cross-module data exchange via REST API.',
        ],
        stack: ['JavaScript', 'ExtJS', 'REST API', 'SQL', 'Java EE'],
      },
      {
        title: 'Document Linking Module',
        when: 'Apr 2023 — May 2023',
        role: 'Junior Web Developer',
        lead: 'A dynamic linking module with access control, context-aware UI rendering, and robust link management — clipboard integration for quick copy-paste, permission enforcement for secure operations, and tools for moving/deleting links to streamline document workflows.',
        did: [
          'Clipboard integration for seamless copy-paste of document links with short descriptions and quick-access buttons.',
          'Permission validation before all copy, paste, and rendering actions.',
          'Context-aware UI that adapts to session type — registration, main, creation.',
          'Link movement and deletion within sessions for better organization.',
        ],
        stack: ['JavaScript', 'Vue.js', 'Java', 'REST API'],
      },
    ],
  },
  education: [
    {
      name: 'Belarusian National Technical University',
      when: '2005 — 2011',
      degree: 'Manager-economist',
    },
  ],
  languages: [
    { name: 'English', level: 'B2 · Upper-Intermediate', pct: 75 },
    { name: 'Russian', level: 'Native', pct: 100 },
  ],
  contact: {
    heading: "Let's build something.",
    subtitle: 'The fastest way to reach me is email or Telegram. I usually reply within a day.',
  },
  ui: {
    nav: {
      downloadCV: 'Download CV',
      navAbout: 'About',
      navSkills: 'Skills',
      navExperience: 'Experience',
      navProjects: 'Projects',
      navContact: 'Contact',
    },
    hero: {
      ctaWork: 'See selected work',
      ctaContact: 'Get in touch',
    },
    kickers: {
      kickerAbout: '01 — About',
      kickerSkills: '02 — Skills',
      kickerExperience: '03 — Experience',
      kickerProjects: '04 — Selected projects',
      kickerEducation: '05 — Education',
      kickerLanguages: '06 — Languages',
      kickerContact: '07 — Contact',
    },
    sections: {
      educationTitle: 'Education.',
      languagesTitle: 'Languages.',
    },
    contactCTA: {
      emailBtn: 'Email me',
      downloadBtn: 'Download CV (PDF)',
    },
    resume: {
      toolbarHint:
        'Resume preview · A4 · Choose **"Save as PDF"** as destination, then turn off **"Headers and footers"** in More settings',
      backBtn: 'Back to site',
      printBtn: 'Print / Save as PDF',
      printBtnShort: 'Save as PDF',
    },
    footer: {
      footerCredit: 'Crafted with care · Last updated April 2026',
    },
  },
};

export default content;
