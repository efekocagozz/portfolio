import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "C#", level: 4 },
      { name: "Java", level: 4 },
      { name: "PHP", level: 3 },
      { name: "SQL", level: 4 },
      { name: "JavaScript", level: 3 },
      { name: "HTML5", level: 4 },
      { name: "CSS3", level: 4 },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      { name: "Spring Boot", level: 4 },
      { name: "ASP.NET Core MVC", level: 4 },
      { name: "Vue.js", level: 3 },
      { name: "Tailwind CSS", level: 3 },
      { name: "Bootstrap", level: 3 },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "SQL Server", level: 4 },
      { name: "MongoDB", level: 3 },
      { name: "SQLite", level: 3 },
      { name: "Database Design", level: 4 },
      { name: "NoSQL", level: 3 },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git", level: 4 },
      { name: "GitHub", level: 4 },
      { name: "Docker", level: 3 },
      { name: "Github Actions CI/CD", level: 3 },
      { name: "Linux", level: 3 },
      { name: "Azure SQL", level: 3 },
      { name: "Railway", level: 3 },
    ],
  },
  {
    name: "Architecture & Concepts",
    skills: [
      { name: "Object-Oriented Programming", level: 4 },
      { name: "MVC Architecture", level: 4 },
      { name: "REST APIs", level: 4 },
      { name: "Agile Development", level: 3 },
    ],
  },
];