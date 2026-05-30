"use client";

import {
  Smartphone,
  Layers,
  Boxes,
  Sparkles,
  Server,
  Compass,
  type LucideIcon,
} from "lucide-react";
import { Section, Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  Smartphone,
  Layers,
  Boxes,
  Sparkles,
  Server,
  Compass,
};

export function Services() {
  return (
    <Section id="services">
      <Container>
        <SectionHeading
          index="05"
          kicker="Services"
          title="How I can help your team."
          description="Whether you need a feature shipped, an architecture untangled, or AI woven into your product — I plug in where it counts."
        />

        <div className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-[var(--hair)] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Sparkles;
            return (
              <Reveal key={service.id} delay={(i % 3) * 0.06}>
                <div className="group relative h-full bg-[var(--glass)] p-7 transition-colors duration-500 hover:bg-[var(--glass-2)]">
                  <div className="absolute inset-x-0 top-0 h-px scale-x-0 bg-[var(--color-accent)] transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--hair)] bg-[var(--bg-elev)] text-[var(--color-accent)] transition-transform duration-500 group-hover:-translate-y-1">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-dim">{service.description}</p>
                  <span className="mt-4 inline-block font-[family-name:var(--font-mono)] text-xs text-faint">
                    0{i + 1}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
