"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MessageCircle, Send, Check, Loader2 } from "lucide-react";
import { Section, Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { site } from "@/lib/data";

type Status = "idle" | "sending" | "sent";

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "LinkedIn", value: "in/asieuzzaman-wasir", href: site.linkedin, icon: Linkedin },
  { label: "GitHub", value: "@wasir", href: site.github, icon: Github },
  { label: "WhatsApp", value: "Direct message", href: site.whatsappUrl, icon: MessageCircle },
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    // Demo flow — wire to a real endpoint, Formspree, or a route handler.
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => {
        (e.target as HTMLFormElement).reset();
        setStatus("idle");
      }, 2600);
    }, 1400);
  }

  return (
    <Section id="contact">
      <Container>
        <SectionHeading
          index="07"
          kicker="Contact"
          title="Let's build something exceptional."
          description="Have a product to ship, an architecture to untangle, or an AI idea worth exploring? My inbox is open."
        />

        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Channels */}
          <div className="grid gap-4">
            <Reveal>
              <GlassCard className="p-7">
                <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-faint">
                  Direct lines
                </p>
                <div className="mt-5 grid gap-3">
                  {channels.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-xl border border-[var(--hair)] bg-[var(--glass)] p-3.5 transition-colors hover:border-[var(--color-accent)]"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--bg-elev)] text-[var(--color-accent)]">
                        <c.icon size={17} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-faint">{c.label}</span>
                        <span className="block truncate text-sm font-medium">{c.value}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.1}>
              <GlassCard className="flex items-center gap-3 p-5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                </span>
                <p className="text-sm text-dim">
                  Currently <span className="font-semibold text-[var(--text)]">available</span> for
                  new projects · Replies within 24h
                </p>
              </GlassCard>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.06}>
            <GlassCard className="p-7" spotlight={false}>
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Jane Doe" />
                  <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
                </div>
                <Field label="Company" name="company" placeholder="Acme Inc. (optional)" required={false} />
                <div className="grid gap-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-dim">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me what you're building…"
                    className="resize-none rounded-xl border border-[var(--hair)] bg-[var(--glass)] px-4 py-3 text-sm outline-none transition-colors placeholder:text-faint focus:border-[var(--color-accent)]"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status !== "idle"}
                  whileHover={{ scale: status === "idle" ? 1.01 : 1 }}
                  whileTap={{ scale: status === "idle" ? 0.99 : 1 }}
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-[var(--color-accent-ink)] transition-opacity disabled:opacity-90"
                >
                  {status === "idle" && (
                    <>
                      Send message <Send size={16} />
                    </>
                  )}
                  {status === "sending" && (
                    <>
                      Sending <Loader2 size={16} className="animate-spin" />
                    </>
                  )}
                  {status === "sent" && (
                    <>
                      Message sent <Check size={16} />
                    </>
                  )}
                </motion.button>
                <p className="text-center text-xs text-faint">
                  This demo form simulates submission — connect it to your endpoint of choice.
                </p>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={name} className="text-xs font-medium text-dim">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-[var(--hair)] bg-[var(--glass)] px-4 py-3 text-sm outline-none transition-colors placeholder:text-faint focus:border-[var(--color-accent)]"
      />
    </div>
  );
}
