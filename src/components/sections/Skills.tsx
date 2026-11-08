"use client";

import FadeInView from "@/components/animations/FadeInView";
import SkillSphere from "@/components/ui/SkillSphere";
import { SECTION_IDS } from "@/lib/utils";

import { sphereSkills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id={SECTION_IDS.skills}
      className="section-padding max-w-[1200px] mx-auto"
      aria-label="Skills"
    >
      {/* Section label */}
      <FadeInView className="flex items-center gap-4 mb-12">
        <span className="section-label">02 — Skills</span>
        <div className="flex-1 h-px bg-white/[0.07]" aria-hidden="true" />
      </FadeInView>

      <FadeInView direction="none" duration={0.8}>
        <div className="relative mx-auto w-full max-w-[640px]">
          {/* faint grid behind the sphere, faded at the edges */}
          <div
            className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(circle_at_center,black_35%,transparent_72%)]"
            aria-hidden="true"
          />
          <SkillSphere items={sphereSkills} />
          <p className="section-label text-center mt-2">Drag to rotate</p>
        </div>
      </FadeInView>
    </section>
  );
}
