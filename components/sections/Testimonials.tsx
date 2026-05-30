"use client";

import { Quote } from "lucide-react";
import { Section, Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <Container>
        <SectionHeading
          index="06"
          kicker="Signal"
          title="Trusted by the people who ship."
          description="What CTOs, product leaders, and founders say after working together."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <GlassCard className="flex h-full flex-col p-7">
                <Quote className="text-[var(--color-accent)]" size={26} />
                <p className="mt-5 flex-1 text-base leading-relaxed text-[var(--text)]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-[var(--hair)] pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--hair-strong)] bg-[var(--glass-2)] font-[family-name:var(--font-display)] text-sm font-semibold accent-text">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-faint">{t.title}</p>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
