"use client";

import FadeInView from "@/components/animations/FadeInView";
import { SECTION_IDS } from "@/lib/utils";

import { aboutMe, stats, interests } from "@/data/about";

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

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-20">
        {/* Left — bio */}
        <div>
          <FadeInView>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
              Who I Am
            </h2>
          </FadeInView>

          <div className="space-y-4">
            {aboutMe.map((paragraph, idx) => (
              <FadeInView key={idx} delay={0.05 + idx * 0.05}>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {paragraph}
                </p>
              </FadeInView>
            ))}
          </div>

          {/* Inline stats */}
          <FadeInView delay={0.2} className="mt-10 flex items-center gap-8 border-t border-white/[0.07] pt-6">
            {stats.map((s, i) => (
              <div key={s.label}>
                <p className="text-white font-bold text-lg">{s.value}</p>
                <p className="section-label mt-0.5">{s.label}</p>
                {i < stats.length - 1 && (
                  <span className="sr-only">/</span>
                )}
              </div>
            ))}
          </FadeInView>
        </div>

        {/* Right — interests */}
        <FadeInView direction="left" delay={0.1}>
          <div>

            {/* Career goal */}
            <div className="mt-8 pt-6 border-t border-white/[0.07]">
              <p className="section-label mb-3">Education</p>
              <p className="text-xs text-zinc-500 leading-relaxed">
                inHolland University of Applied Sciences<br />
                BSc Information Technology — Haarlem, NL<br />
                2024 — Present
              </p>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
