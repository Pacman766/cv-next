export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  telegram: string;
  linkedin: string;
  github: string;
  photo: string;
  available: boolean;
  availabilityNote: string;
  cvFile: string;
}

export interface Stat {
  num: string;
  label: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ExperienceRole {
  title: string;
  when: string;
  org: string;
  stack: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  chips: string[];
}

export interface Project {
  title: string;
  when: string;
  role: string;
  lead: string;
  did: string[];
  stack: string[];
  repo?: string;
  demo?: string;
}

export interface EducationItem {
  name: string;
  when: string;
  degree: string;
}

export interface Language {
  name: string;
  level: string;
  pct: number;
}

export interface CVData {
  profile: Profile;
  hero: {
    titleLines: string[];
    subtitle: string;
    stats: Stat[];
  };
  about: {
    heading: string;
    lead: string;
    points: string[];
  };
  skills: {
    heading: string;
    subtitle: string;
    groups: SkillGroup[];
  };
  experience: {
    heading: string;
    roles: ExperienceRole[];
  };
  projects: {
    heading: string;
    items: Project[];
    sideHeading: string;
    sideItems: Project[];
  };
  education: EducationItem[];
  languages: Language[];
  contact: {
    heading: string;
    subtitle: string;
  };
  ui: {
    nav: Record<string, string>;
    hero: Record<string, string>;
    kickers: Record<string, string>;
    sections: Record<string, string>;
    contactCTA: Record<string, string>;
    resume: Record<string, string>;
    footer: Record<string, string>;
  };
}
