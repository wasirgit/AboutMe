"use client";

import { Github, ArrowUpRight } from "lucide-react";
import { Section, Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <Section id="work">
      <Container>
        <SectionHeading
          index="03"
          kicker="Selected work"
          title="Projects with real architecture behind them."
          description="A sample of systems I've designed and shipped — from AI assistants to event-driven backends."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={project.id}
              delay={(i % 2) * 0.08}
              className={cn(project.featured && i === 0 ? "lg:col-span-2" : "")}
            >
              <ProjectCard project={project} wide={project.featured && i === 0} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ProjectCard({ project, wide }: { project: Project; wide?: boolean }) {
  return (
    <GlassCard className="flex h-full flex-col">
      <div
        className={cn(
          "relative flex items-end overflow-hidden border-b border-[var(--hair)]",
          wide ? "h-56 sm:h-72" : "h-44"
        )}
      >
        {/* Generative cover keyed to the project's accent — swap for a real image at any time */}
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover/card:scale-105"
          style={{
            background: `radial-gradient(130% 100% at 80% 0%, ${project.accent}33, transparent 55%), linear-gradient(160deg, var(--bg-elev), var(--bg))`,
          }}
        />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div
          className="absolute right-5 top-5 h-12 w-12 rounded-2xl"
          style={{ background: project.accent, boxShadow: `0 0 40px ${project.accent}66` }}
        />
        <div className="relative z-10 p-6">
          <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-faint">
            {project.category} · {project.year}
          </span>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-dim">{project.description}</p>

        <ul className="mt-5 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-sm text-dim">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[var(--hair)] bg-[var(--glass)] px-2.5 py-1 font-[family-name:var(--font-mono)] text-[0.7rem] text-dim"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 border-t border-[var(--hair)] pt-5">
          {project.demo ? (
            <a
              href={project.demo}
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-[var(--color-accent)]"
            >
              Live demo <ArrowUpRight size={15} />
            </a>
          ) : null}
          {project.github ? (
            <a
              href={project.github}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-dim transition-colors hover:text-[var(--text)]"
            >
              <Github size={15} /> Code
            </a>
          ) : null}
        </div>
      </div>
    </GlassCard>
  );
}
