"use client";

import { useState } from "react";
import FadeInView from "@/components/animations/FadeInView";
import SkillSphere from "@/components/ui/SkillSphere";
import { SECTION_IDS, cn } from "@/lib/utils";

import { skillCategories, sphereSkills } from "@/data/skills";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

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

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center">
        {/* Left — rotating sphere */}
        <FadeInView direction="none" duration={0.8}>
          <div className="relative mx-auto w-full max-w-[520px]">
            {/* faint grid behind the sphere, faded at the edges */}
            <div
              className="absolute inset-0 rounded-2xl opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(circle_at_center,black_35%,transparent_72%)]"
              aria-hidden="true"
            />
            <SkillSphere items={sphereSkills} activeCategory={activeCategory} />
            <p className="section-label text-center mt-2">
              Drag to rotate<span className="hidden lg:inline"> · Hover a group to highlight</span>
            </p>
          </div>
        </FadeInView>

        {/* Right — categorised list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border-l border-t border-white/[0.07] rounded-lg overflow-hidden">
          {skillCategories.map((col, colIdx) => {
            const isActive = activeCategory === col.name;
            return (
              <FadeInView key={col.name} delay={colIdx * 0.07} direction="none">
                <div
                  className={cn(
                    "p-5 h-full border-r border-b border-white/[0.07] transition-colors duration-200",
                    isActive && "bg-white/[0.03]",
                  )}
                  onMouseEnter={() => setActiveCategory(col.name)}
                  onMouseLeave={() => setActiveCategory(null)}
                  onFocus={() => setActiveCategory(col.name)}
                  onBlur={() => setActiveCategory(null)}
                  tabIndex={0}
                >
                  <p
                    className={cn(
                      "section-label mb-4 transition-colors duration-200",
                      isActive && "!text-zinc-200",
                    )}
                  >
                    {col.name}
                  </p>

                  <ul className="divide-y divide-white/[0.05]">
                    {col.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="py-2 text-[13px] text-zinc-400 hover:text-white transition-colors duration-150"
                      >
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
