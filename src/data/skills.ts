import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "Java" },
      { name: "C#" },
      { name: "SQL" },
      { name: "PHP" },
      { name: "JavaScript" },
      { name: "HTML & CSS" },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      { name: "Spring Boot" },
      { name: "Spring Security & Spring Data JPA" },
      { name: "ASP.NET Core MVC" },
      { name: "Vue.js 3 & Pinia" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "SQL Server & Azure SQL" },
      { name: "MongoDB" },
      { name: "SQLite & H2" },
      { name: "Relational database design" },
      { name: "Document data modelling" },
    ],
  },
  {
    name: "Testing & API",
    skills: [
      { name: "JUnit, Mockito & AssertJ" },
      { name: "REST API design" },
      { name: "OpenAPI / Swagger" },
      { name: "JWT authentication" },
      { name: "Storybook" },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git & GitHub" },
      { name: "Docker" },
      { name: "GitHub Actions (CI/CD)" },
      { name: "Linux" },
      { name: "Maven" },
      { name: "Railway" },
    ],
  },
  {
    name: "Practices",
    skills: [
      { name: "Object-oriented programming" },
      { name: "MVC & layered architecture" },
      { name: "Repository & service patterns" },
      { name: "Agile / Scrum" },
    ],
  },
];

/**
 * Short labels shown on the rotating skill sphere.
 * `category` must match a `skillCategories[].name` so the sphere can
 * highlight a group when its column is hovered in the grid below it.
 */
export const sphereSkills: { label: string; category: string }[] = [
  { label: "Java", category: "Languages" },
  { label: "C#", category: "Languages" },
  { label: "SQL", category: "Languages" },
  { label: "PHP", category: "Languages" },
  { label: "JavaScript", category: "Languages" },
  { label: "HTML/CSS", category: "Languages" },
  { label: "Spring Boot", category: "Frameworks" },
  { label: "ASP.NET Core", category: "Frameworks" },
  { label: "Vue.js", category: "Frameworks" },
  { label: "Pinia", category: "Frameworks" },
  { label: "Tailwind", category: "Frameworks" },
  { label: "Bootstrap", category: "Frameworks" },
  { label: "SQL Server", category: "Databases" },
  { label: "Azure SQL", category: "Databases" },
  { label: "MongoDB", category: "Databases" },
  { label: "SQLite", category: "Databases" },
  { label: "JUnit", category: "Testing & API" },
  { label: "Mockito", category: "Testing & API" },
  { label: "REST", category: "Testing & API" },
  { label: "OpenAPI", category: "Testing & API" },
  { label: "JWT", category: "Testing & API" },
  { label: "Storybook", category: "Testing & API" },
  { label: "Git", category: "DevOps & Tools" },
  { label: "Docker", category: "DevOps & Tools" },
  { label: "GH Actions", category: "DevOps & Tools" },
  { label: "Linux", category: "DevOps & Tools" },
  { label: "Maven", category: "DevOps & Tools" },
  { label: "Railway", category: "DevOps & Tools" },
  { label: "OOP", category: "Practices" },
  { label: "MVC", category: "Practices" },
  { label: "Scrum", category: "Practices" },
];
