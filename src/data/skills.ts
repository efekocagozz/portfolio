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
