"use client";

import FadeInView from "@/components/animations/FadeInView";
import { SECTION_IDS } from "@/lib/utils";

import { skillCategories } from "@/data/skills";

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-white/[0.07] rounded-lg overflow-hidden">
        {skillCategories.map((col, colIdx) => (
          <FadeInView
            key={col.name}
            delay={colIdx * 0.07}
            direction="none"
          >
            <div className="p-6 h-full border-r border-b border-white/[0.07]">
              {/* Column header */}
              <p className="section-label mb-5">{col.name}</p>

              {/* Skill list */}
              <ul className="divide-y divide-white/[0.05]">
                {col.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="py-2.5 text-sm text-zinc-300 hover:text-white transition-colors duration-150 flex justify-between items-center"
                  >
                    <span>{skill.name}</span>
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
