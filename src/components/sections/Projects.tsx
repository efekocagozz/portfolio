"use client";

import FadeInView from "@/components/animations/FadeInView";
import { projects } from "@/data/projects";
import { SECTION_IDS } from "@/lib/utils";
import type { Project } from "@/types";

const kindLabel: Record<Project["kind"], string> = {
  team: "Team project",
  personal: "Personal project",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <FadeInView delay={index * 0.08} direction="up" className="h-full">
      <article className="group h-full flex flex-col rounded-xl border border-white/[0.07] bg-white/[0.015] p-6 md:p-7 hover:border-white/[0.14] hover:bg-white/[0.03] transition-colors duration-200">
        {/* Header: number, title, label */}
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors duration-200">
            {num}
          </span>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-base font-semibold text-white">{project.title}</h3>
            <span className="section-label text-zinc-600">{kindLabel[project.kind]}</span>
          </div>
        </div>

        <p className="mt-4 text-sm text-zinc-300 leading-relaxed">{project.description}</p>

        <ul className="mt-4 space-y-1.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-zinc-400 leading-relaxed">
              <span className="mt-[0.1rem] shrink-0 text-zinc-600" aria-hidden="true">—</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* What I learned */}
        <div className="mt-5 border-t border-white/[0.07] pt-4">
          <p className="section-label mb-2">What I learned</p>
          <p className="text-sm text-zinc-400 leading-relaxed">{project.learned}</p>
        </div>

        {/* Links — pinned to the bottom so cards line up */}
        <div className="mt-auto pt-6 flex items-center gap-4">
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
      </article>
    </FadeInView>
  );
}

export default function Projects() {
  return (
    <section
      id={SECTION_IDS.projects}
      className="section-padding max-w-[1200px] mx-auto"
      aria-label="Projects"
    >
      {/* Section label */}
      <FadeInView className="flex items-center gap-4 mb-12">
        <span className="section-label">03 — Projects</span>
        <div className="flex-1 h-px bg-white/[0.07]" aria-hidden="true" />
      </FadeInView>

      <FadeInView className="mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Projects</h2>
        <p className="mt-3 text-sm text-zinc-400">
          Things I&apos;ve built, and what broke along the way.
        </p>
      </FadeInView>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
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
