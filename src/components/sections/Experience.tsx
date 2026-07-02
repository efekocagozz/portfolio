"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeInView from "@/components/animations/FadeInView";
import { timeline } from "@/data/experience";
import { SECTION_IDS } from "@/lib/utils";

function TimelineEntry({
  entry,
  index,
}: {
  entry: (typeof timeline)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-[20px_1fr] md:grid-cols-[160px_20px_1fr] gap-x-6 gap-y-3"
    >
      {/* Period — desktop left column */}
      <div className="hidden md:block pt-0.5">
        <span className="font-mono text-xs text-zinc-600">{entry.period}</span>
      </div>

      {/* Dot + line */}
      <div className="flex flex-col items-center">
        <div className="w-1 h-1 rounded-full bg-zinc-500 mt-1.5 shrink-0" aria-hidden="true" />
        <div className="w-px flex-1 bg-white/[0.07] mt-2" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="pb-10">
        {/* Period — mobile */}
        <p className="font-mono text-xs text-zinc-600 mb-2 md:hidden">{entry.period}</p>

        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="inline-block text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded border border-white/[0.08] text-zinc-600">
            {entry.type}
          </span>
        </div>

        <h3 className="text-sm font-semibold text-white mb-0.5">{entry.title}</h3>
        <p className="text-xs text-zinc-500 mb-3">{entry.organization}</p>

        <p className="text-sm text-zinc-400 leading-relaxed mb-3">
          {entry.description}
        </p>

        <ul className="space-y-1">
          {entry.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-zinc-600">
              <span className="mt-0.5 shrink-0" aria-hidden="true">—</span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id={SECTION_IDS.experience}
      className="section-padding max-w-[1200px] mx-auto"
      aria-label="Experience and education"
    >
      {/* Section label */}
      <FadeInView className="flex items-center gap-4 mb-12">
        <span className="section-label">04 — Experience</span>
        <div className="flex-1 h-px bg-white/[0.07]" aria-hidden="true" />
      </FadeInView>

      {/* Timeline entries */}
      <div>
        {timeline.map((entry, i) => (
          <TimelineEntry key={entry.id} entry={entry} index={i} />
        ))}
      </div>
    </section>
  );
}
