import {
  siApachemaven, siBootstrap, siDocker, siDotnet, siGit, siGithubactions,
  siHtml5, siJavascript, siJsonwebtokens, siJunit5, siLinux, siMongodb,
  siOpenapiinitiative, siOpenjdk, siPhp, siPinia, siRailway, siSpringboot,
  siSqlite, siStorybook, siTailwindcss, siVuedotjs,
} from "simple-icons";
import type { SphereSkill } from "@/types";

/**
 * Items shown on the rotating skill sphere.
 * Skills without a published logo get a `mono` text tile instead.
 */
export const sphereSkills: SphereSkill[] = [
  { label: "Java", icon: siOpenjdk },
  { label: "C#", mono: "C#", color: "#9B4F96" },
  { label: "SQL", mono: "SQL", color: "#4479A1" },
  { label: "PHP", icon: siPhp },
  { label: "JavaScript", icon: siJavascript },
  { label: "HTML/CSS", icon: siHtml5 },
  { label: "Spring Boot", icon: siSpringboot },
  { label: "ASP.NET Core", icon: siDotnet },
  { label: "Vue.js", icon: siVuedotjs },
  { label: "Pinia", icon: siPinia },
  { label: "Tailwind", icon: siTailwindcss },
  { label: "Bootstrap", icon: siBootstrap },
  { label: "SQL Server", mono: "MS", color: "#CC2927" },
  { label: "Azure SQL", mono: "AZ", color: "#0089D6" },
  { label: "MongoDB", icon: siMongodb },
  { label: "SQLite", icon: siSqlite },
  { label: "JUnit", icon: siJunit5 },
  { label: "Mockito", mono: "Mo", color: "#7CB342" },
  { label: "REST", mono: "{ }" },
  { label: "OpenAPI", icon: siOpenapiinitiative },
  { label: "JWT", icon: siJsonwebtokens },
  { label: "Storybook", icon: siStorybook },
  { label: "Git", icon: siGit },
  { label: "Docker", icon: siDocker },
  { label: "GH Actions", icon: siGithubactions },
  { label: "Linux", icon: siLinux },
  { label: "Maven", icon: siApachemaven },
  { label: "Railway", icon: siRailway },
  { label: "OOP", mono: "OOP" },
  { label: "MVC", mono: "MVC" },
  { label: "Scrum", mono: "↻" },
];
