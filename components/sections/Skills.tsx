"use client";

import { motion } from "framer-motion";
import { Section, Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeading
          index="02"
          kicker="Capabilities"
          title="A full-stack mobile toolkit."
          description="Depth in native Android, breadth across cross-platform, backend, AI, and the infrastructure that ties it together."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.id} delay={i * 0.06} className={i === 0 ? "lg:row-span-2" : ""}>
              <GlassCard className="flex h-full flex-col p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-[family-name:var(--font-mono)] text-xs accent-text">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                    {group.title}
                  </h3>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-dim">{group.blurb}</p>

                <ul className="mt-auto space-y-4">
                  {group.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="font-[family-name:var(--font-mono)] text-xs text-faint">
                          {skill.level}
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-[var(--hair)]">
                        <motion.div
                          className="h-full rounded-full bg-[var(--color-accent)]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
