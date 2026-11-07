import {
  siApachemaven, siBootstrap, siDocker, siDotnet, siGit, siGithubactions,
  siHtml5, siJavascript, siJsonwebtokens, siJunit5, siLinux, siMongodb,
  siOpenapiinitiative, siOpenjdk, siPhp, siPinia, siRailway, siSpringboot,
  siSqlite, siStorybook, siTailwindcss, siVuedotjs,
} from "simple-icons";
import type { SkillCategory, SphereSkill } from "@/types";

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
 * Items shown on the rotating skill sphere.
 * `category` must match a `skillCategories[].name` so the sphere can
 * highlight a group when its column is hovered in the grid next to it.
 * Skills without a published logo get a `mono` text tile instead.
 */
export const sphereSkills: SphereSkill[] = [
  { label: "Java", category: "Languages", icon: siOpenjdk },
  { label: "C#", category: "Languages", mono: "C#", color: "#9B4F96" },
  { label: "SQL", category: "Languages", mono: "SQL", color: "#4479A1" },
  { label: "PHP", category: "Languages", icon: siPhp },
  { label: "JavaScript", category: "Languages", icon: siJavascript },
  { label: "HTML/CSS", category: "Languages", icon: siHtml5 },
  { label: "Spring Boot", category: "Frameworks", icon: siSpringboot },
  { label: "ASP.NET Core", category: "Frameworks", icon: siDotnet },
  { label: "Vue.js", category: "Frameworks", icon: siVuedotjs },
  { label: "Pinia", category: "Frameworks", icon: siPinia },
  { label: "Tailwind", category: "Frameworks", icon: siTailwindcss },
  { label: "Bootstrap", category: "Frameworks", icon: siBootstrap },
  { label: "SQL Server", category: "Databases", mono: "MS", color: "#CC2927" },
  { label: "Azure SQL", category: "Databases", mono: "AZ", color: "#0089D6" },
  { label: "MongoDB", category: "Databases", icon: siMongodb },
  { label: "SQLite", category: "Databases", icon: siSqlite },
  { label: "JUnit", category: "Testing & API", icon: siJunit5 },
  { label: "Mockito", category: "Testing & API", mono: "Mo", color: "#7CB342" },
  { label: "REST", category: "Testing & API", mono: "{ }" },
  { label: "OpenAPI", category: "Testing & API", icon: siOpenapiinitiative },
  { label: "JWT", category: "Testing & API", icon: siJsonwebtokens },
  { label: "Storybook", category: "Testing & API", icon: siStorybook },
  { label: "Git", category: "DevOps & Tools", icon: siGit },
  { label: "Docker", category: "DevOps & Tools", icon: siDocker },
  { label: "GH Actions", category: "DevOps & Tools", icon: siGithubactions },
  { label: "Linux", category: "DevOps & Tools", icon: siLinux },
  { label: "Maven", category: "DevOps & Tools", icon: siApachemaven },
  { label: "Railway", category: "DevOps & Tools", icon: siRailway },
  { label: "OOP", category: "Practices", mono: "OOP" },
  { label: "MVC", category: "Practices", mono: "MVC" },
  { label: "Scrum", category: "Practices", mono: "↻" },
];
