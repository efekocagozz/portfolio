export interface Skill {
  name: string;
  level?: number;
}

/** A skill placed on the rotating sphere. */
export interface SphereSkill {
  label: string;
  category: string;
  /** Brand logo from simple-icons (title, svg path, hex colour). */
  icon?: { title: string; path: string; hex: string };
  /** Short text used as a monogram tile when no logo exists. */
  mono?: string;
  /** Hover colour for monogram tiles; defaults to white. */
  color?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  kind: "team" | "personal";
  description: string;
  highlights: string[];
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
