"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import FadeInView from "@/components/animations/FadeInView";
import { projects } from "@/data/projects";
import { SECTION_IDS } from "@/lib/utils";
import type { Project } from "@/types";

const statusLabel: Record<Project["status"], string> = {
  production: "Live",
  wip: "In progress",
  archived: "Archived",
};

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group"
    >
      <div className="grid grid-cols-[48px_1fr] md:grid-cols-[48px_1fr_auto] gap-x-6 gap-y-3 py-7 border-b border-white/[0.07] hover:bg-white/[0.02] transition-colors duration-200 px-2 rounded-sm -mx-2">
        {/* Index number */}
        <div className="pt-0.5">
          <span className="font-mono text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors duration-200">
            {num}
          </span>
        </div>

        {/* Main content */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-sm font-semibold text-white">{project.title}</h3>
            <span className="section-label text-zinc-600">{statusLabel[project.status]}</span>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
            {project.longDescription}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1">
            {project.tech.map((t, i) => (
              <span key={t} className="text-xs text-zinc-600">
                {t}
                {i < project.tech.length - 1 && (
                  <span className="ml-3 text-zinc-800" aria-hidden="true">·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="col-start-2 md:col-start-3 flex items-start gap-4 pt-0.5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-500 hover:text-white transition-colors duration-150 flex items-center gap-1"
            aria-label={`${project.title} on GitHub`}
          >
            GitHub
            <span aria-hidden="true">↗</span>
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500 hover:text-white transition-colors duration-150 flex items-center gap-1"
              aria-label={`${project.title} live demo`}
            >
              Live
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id={SECTION_IDS.projects}
      className="section-padding max-w-[1200px] mx-auto"
      aria-label="Featured projects"
    >
      {/* Section label */}
      <FadeInView className="flex items-center gap-4 mb-12">
        <span className="section-label">03 — Projects</span>
        <div className="flex-1 h-px bg-white/[0.07]" aria-hidden="true" />
      </FadeInView>

      {/* Header row */}
      <FadeInView className="mb-2">
        <div className="grid grid-cols-[48px_1fr] md:grid-cols-[48px_1fr_auto] gap-x-6 px-2">
          <div />
          <div className="flex gap-6">
            <span className="section-label">Project</span>
          </div>
          <div className="hidden md:block">
            <span className="section-label">Links</span>
          </div>
        </div>
        <div className="h-px bg-white/[0.07] mt-3" />
      </FadeInView>

      {/* Project rows */}
      <div>
        {projects.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* GitHub CTA */}
      <FadeInView delay={0.2} className="mt-10">
        <a
          href="https://github.com/efekocagozz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors duration-200"
        >
          <span className="section-label">More on GitHub</span>
          <span aria-hidden="true">↗</span>
        </a>
      </FadeInView>
    </section>
  );
}
