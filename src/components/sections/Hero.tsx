"use client";

import { motion } from "framer-motion";
import { SECTION_IDS } from "@/lib/utils";

const HEADLINE = ["Developer in Progress."];

function WordReveal({ words, delay = 0 }: { words: string[]; delay?: number }) {
  return (
    <>
      {words.map((word, i) => (
        <span key={word} className="inline-block overflow-hidden leading-[1.0]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </>
  );
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id={SECTION_IDS.hero}
      className="relative min-h-screen flex flex-col justify-center max-w-[1200px] mx-auto px-6 md:px-12"
      aria-label="Introduction"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-24 items-end pt-20 pb-24">
        {/* Left column — name + headline */}
        <div>
          {/* Name label */}
          <motion.p
            className="section-label mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Efe Kodzhagioz — IT Student
          </motion.p>

          {/* Giant headline with word reveal */}
          <h1 className="text-[clamp(3.5rem,10vw,7.5rem)] font-bold tracking-tight text-white leading-[0.92] mb-0">
            <WordReveal words={HEADLINE} delay={0.2} />
          </h1>
        </div>

        {/* Right column — role, description, CTAs */}
        <div className="flex flex-col gap-6 lg:pb-2">
          <motion.div {...fadeUp(0.55)} className="space-y-3">
            <p className="text-sm text-zinc-300 leading-relaxed">
              IT student at inHolland University focused on data engineering
              and backend development. I build APIs, databases, and systems
              that are clean, reliable, and built to last.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.65)} className="flex flex-col sm:flex-row lg:flex-col gap-2">
            <button
              onClick={() => scrollTo(SECTION_IDS.projects)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-100 transition-colors duration-200"
            >
              View Projects
              <span aria-hidden="true">→</span>
            </button>
            <button
              onClick={() => scrollTo(SECTION_IDS.contact)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-white/20 text-zinc-300 text-xs font-medium hover:text-white hover:border-white/40 transition-all duration-200"
            >
              Get in Touch
            </button>
          </motion.div>

          <motion.div {...fadeUp(0.75)}>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              <span className="section-label text-zinc-500">Available for work</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hairline bottom rule */}
      <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 h-px bg-white/[0.07]" aria-hidden="true" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-6 md:left-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.2 }}
      >
        <span className="section-label">Scroll ↓</span>
      </motion.div>
    </section>
  );
}
