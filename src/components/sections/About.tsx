"use client";

import FadeInView from "@/components/animations/FadeInView";
import { SECTION_IDS } from "@/lib/utils";

import { aboutMe, education } from "@/data/about";

export default function About() {
  return (
    <section
      id={SECTION_IDS.about}
      className="section-padding max-w-[1200px] mx-auto"
      aria-label="About me"
    >
      {/* Section label row */}
      <FadeInView className="flex items-center gap-4 mb-12">
        <span className="section-label">01 — About</span>
        <div className="flex-1 h-px bg-white/[0.07]" aria-hidden="true" />
      </FadeInView>

      <div className="max-w-2xl">
        <FadeInView>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
            A bit about me
          </h2>
        </FadeInView>

        <div className="space-y-4">
          {aboutMe.map((paragraph, idx) => (
            <FadeInView key={idx} delay={0.05 + idx * 0.05}>
              <p className="text-zinc-400 leading-relaxed text-sm">{paragraph}</p>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.2} className="mt-10 border-t border-white/[0.07] pt-6">
          <p className="text-xs text-zinc-500 leading-relaxed">{education}</p>
        </FadeInView>
      </div>
    </section>
  );
}
