"use client";

import { motion } from "framer-motion";
import { Section, Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="journey">
      <Container>
        <SectionHeading
          index="04"
          kicker="Journey"
          title="Thirteen years, one craft."
          description="A timeline of building for mobile — from first commits to platform architecture."
        />

        <div className="relative">
          {/* Animated spine */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--hair)] sm:left-[calc(8rem+7px)]">
            <motion.div
              className="absolute inset-x-0 top-0 w-px origin-top bg-[var(--color-accent)]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              style={{ height: "100%" }}
            />
          </div>

          <div className="space-y-10">
            {experience.map((item, i) => (
              <Reveal key={item.period} delay={i * 0.05}>
                <div className="relative grid gap-4 pl-9 sm:grid-cols-[8rem_1fr] sm:gap-8 sm:pl-0">
                  {/* Period */}
                  <div className="sm:pt-0.5 sm:text-right">
                    <span className="font-[family-name:var(--font-mono)] text-sm text-faint">
                      {item.period}
                    </span>
                  </div>

                  {/* Node */}
                  <span className="absolute left-0 top-1.5 flex h-3.5 w-3.5 items-center justify-center sm:left-[calc(8rem+1px)]">
                    <span className="absolute h-3.5 w-3.5 rounded-full bg-[var(--color-accent)] opacity-30" />
                    <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--bg)]" />
                  </span>

                  <div className="sm:pl-8">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
                      {item.role}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium accent-text">{item.company}</p>
                    <p className="mt-2 text-sm leading-relaxed text-dim">{item.summary}</p>
                    <ul className="mt-3 space-y-1.5">
                      {item.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2.5 text-sm text-dim">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--hair-strong)]" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
