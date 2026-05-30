"use client";

import { Section, Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { philosophy, site } from "@/lib/data";

export function About() {
  return (
    <Section id="about">
      <Container>
        <SectionHeading
          index="01"
          kicker="About"
          title="From one app to whole platforms."
          description="Thirteen years ago I shipped my first Android app. Today I architect the systems that teams build their products on — and I bring AI along for the ride."
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="space-y-6 text-lg leading-relaxed text-dim">
            <p>
              I&apos;m {site.name.split(" ")[0]}, a senior mobile engineer and architect based in{" "}
              {site.location}. My craft is native Android — Kotlin and Jetpack Compose — but my
              range now spans Flutter, a growing SwiftUI practice, and event-driven Python backends
              built on FastAPI and NATS.
            </p>
            <p>
              I&apos;ve spent more than a decade turning messy requirements into clean, modular
              systems: feature modules that scale, architectures that teams understand, and
              pipelines that ship without drama. Lately, my focus is{" "}
              <span className="accent-text font-medium">AI inside real products</span> — assistants
              and intelligent features that feel native, fast, and private.
            </p>
            <p>
              I work the way good systems are built: clearly, deliberately, and with the next
              engineer in mind.
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2">
              <Detail label="Experience" value="13+ years" />
              <Detail label="Focus" value="Mobile · AI · Backend" />
              <Detail label="Working with" value="Global teams" />
            </div>
          </Reveal>

          <div className="grid gap-4">
            {philosophy.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <span className="font-[family-name:var(--font-mono)] text-sm accent-text">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-dim">{p.body}</p>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-faint">
        {label}
      </p>
      <p className="mt-1 text-base font-semibold text-[var(--text)]">{value}</p>
    </div>
  );
}
