"use client";

import FadeInView from "@/components/animations/FadeInView";
import { SECTION_IDS } from "@/lib/utils";

const columns = [
  {
    id: "backend",
    title: "Backend",
    skills: ["Java", "Spring Boot", "C#", "REST APIs", "JPA / Hibernate"],
  },
  {
    id: "data",
    title: "Data & Databases",
    skills: ["SQL", "MongoDB", "NoSQL Design", "Data Modelling"],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: ["TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    id: "tools",
    title: "Tools & Infra",
    skills: ["Git", "Docker", "Linux"],
  },
];

export default function Skills() {
  return (
    <section
      id={SECTION_IDS.skills}
      className="section-padding max-w-[1200px] mx-auto"
      aria-label="Technical skills"
    >
      {/* Section label */}
      <FadeInView className="flex items-center gap-4 mb-12">
        <span className="section-label">02 — Skills</span>
        <div className="flex-1 h-px bg-white/[0.07]" aria-hidden="true" />
      </FadeInView>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/[0.07] rounded-lg overflow-hidden">
        {columns.map((col, colIdx) => (
          <FadeInView
            key={col.id}
            delay={colIdx * 0.07}
            direction="none"
          >
            <div
              className={`p-6 h-full ${
                colIdx < columns.length - 1
                  ? "border-b md:border-b-0 md:border-r border-white/[0.07]"
                  : ""
              }`}
            >
              {/* Column header */}
              <p className="section-label mb-5">{col.title}</p>

              {/* Skill list */}
              <ul className="divide-y divide-white/[0.05]">
                {col.skills.map((skill) => (
                  <li
                    key={skill}
                    className="py-2.5 text-sm text-zinc-300 hover:text-white transition-colors duration-150"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInView>
        ))}
      </div>
    </section>
  );
}
