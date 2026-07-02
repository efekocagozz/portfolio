export interface Skill {
  name: string;
  level?: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  live?: string;
  gradient: string;
  status: "production" | "wip" | "archived";
}

export interface TimelineEntry {
  id: string;
  type: "education" | "experience";
  title: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  meta?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}
