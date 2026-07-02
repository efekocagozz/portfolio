import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    skills: [
      { name: "Java", level: 4 },
      { name: "Spring Boot", level: 4 },
      { name: "C#", level: 3 },
      { name: "REST APIs", level: 4 },
      { name: "JPA / Hibernate", level: 3 },
    ],
  },
  {
    name: "Data & Databases",
    skills: [
      { name: "SQL", level: 4 },
      { name: "MongoDB", level: 3 },
      { name: "NoSQL Design", level: 3 },
      { name: "Data Modelling", level: 3 },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "TypeScript", level: 3 },
      { name: "Next.js", level: 3 },
      { name: "Tailwind CSS", level: 3 },
    ],
  },
  {
    name: "Tools & Infra",
    skills: [
      { name: "Git", level: 4 },
      { name: "Docker", level: 3 },
      { name: "Linux", level: 3 },
    ],
  },
];
