/** A skill placed on the rotating sphere. */
export interface SphereSkill {
  label: string;
  /** Brand logo from simple-icons (title, svg path, hex colour). */
  icon?: { title: string; path: string; hex: string };
  /** Short text used as a monogram tile when no logo exists. */
  mono?: string;
  /** Hover colour for monogram tiles; defaults to white. */
  color?: string;
}

export interface Project {
  id: string;
  title: string;
  kind: "team" | "personal";
  description: string;
  highlights: string[];
  /** One-sentence "What I learned" takeaway. */
  learned: string;
  github: string;
  live?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  meta?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
