"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SECTION_IDS } from "@/lib/utils";

const HEADLINE = ["Efe", "Kodzhagioz"];

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
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12"
      aria-label="Introduction"
    >
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-center lg:items-start text-center lg:text-left">
          {/* Left column — label + name */}
          <div className="pt-2 flex flex-col items-center lg:items-start">
            {/* Role label */}
            <motion.p
              className="section-label mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Information Technology Student
            </motion.p>

            {/* Giant headline */}
            <h1 className="text-[clamp(2.75rem,8vw,7.5rem)] sm:text-[clamp(3.5rem,10vw,7.5rem)] font-bold tracking-tight text-white leading-[0.92]">
              <WordReveal words={HEADLINE} delay={0.2} />
            </h1>

            <motion.p
              className="mt-6 text-sm text-zinc-400 leading-relaxed max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              Looking for my first opportunity in IT to apply my technical skills, contribute to real-world projects, and continue learning from experienced professionals.
            </motion.p>
          </div>

          {/* Right column — cohesive card */}
          <motion.div
            {...fadeUp(0.5)}
            className="w-full max-w-[320px] mx-auto lg:mx-0 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 flex flex-col gap-4"
          >
            {/* Portrait */}
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden">
              <Image
                src="/portfolio.jpeg"
                alt="Efe Kodzhagioz"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollTo(SECTION_IDS.projects)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-100 transition-colors duration-200"
              >
                View Projects
                <span aria-hidden="true">→</span>
              </button>
              <button
                onClick={() => scrollTo(SECTION_IDS.contact)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/20 text-zinc-300 text-xs font-medium hover:text-white hover:border-white/40 transition-all duration-200"
              >
                Get in Touch
              </button>
            </div>

            {/* Availability badge */}
            <div className="flex items-center justify-center lg:justify-start gap-2 px-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              <span className="section-label text-zinc-500">Available for work</span>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
