"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { site, roles, stats } from "@/lib/data";
import { Container } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 sm:pt-44">
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr]"
        >
          {/* Left — headline column */}
          <div>
            <motion.div
              variants={item}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              </span>
              <span className="text-dim">Available for select 2026 engagements</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl"
            >
              <span className="text-gradient">{site.name}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-xl leading-relaxed text-dim sm:text-2xl"
            >
              {site.tagline}
            </motion.p>

            <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="inline-flex items-center gap-1.5 text-sm text-faint">
                <MapPin size={14} /> {site.location}
              </span>
              <span className="h-1 w-1 rounded-full bg-[var(--hair-strong)]" />
              <span className="text-sm text-faint">13+ years of Android</span>
            </motion.div>

            <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
              <Button href="#contact">
                <Mail size={16} /> Contact me
              </Button>
              <Button href="#work" variant="outline">
                View projects <ArrowUpRight size={16} />
              </Button>
            </motion.div>

            {/* Stat strip */}
            <motion.dl
              variants={item}
              className="mt-12 grid max-w-lg grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--hair)] sm:grid-cols-4"
            >
              {stats.map((s) => (
                <div key={s.label} className="bg-[var(--glass)] p-4">
                  <dt className="font-[family-name:var(--font-display)] text-2xl font-semibold accent-text">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-faint">{s.label}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Right — portrait + orbiting role chips */}
          <motion.div variants={item} className="relative mx-auto w-full max-w-sm">
            <div className="animate-[float_8s_ease-in-out_infinite] relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[var(--hair-strong)] glass-strong">
              {/* Portrait placeholder — drop a real image at /public/profile.jpg and swap to next/image */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(120% 90% at 30% 10%, rgba(200,247,81,0.22), transparent 55%), linear-gradient(160deg, var(--bg-elev), var(--bg))",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-[family-name:var(--font-display)] text-[7rem] font-bold text-[var(--hair-strong)]">
                  AW
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t border-[var(--hair)] bg-[var(--glass-2)] px-4 py-3 backdrop-blur-md">
                <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-faint">
                  / architect
                </span>
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              </div>
            </div>

            {/* Floating role chip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="glass-strong absolute -left-6 top-10 hidden rounded-2xl px-4 py-3 shadow-[var(--shadow-soft)] sm:block"
            >
              <p className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-widest text-faint">
                Now building
              </p>
              <p className="mt-0.5 text-sm font-semibold">AI-powered apps</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.05 }}
              className="glass-strong absolute -right-4 bottom-16 hidden rounded-2xl px-4 py-3 shadow-[var(--shadow-soft)] sm:block"
            >
              <p className="font-[family-name:var(--font-mono)] text-[0.65rem] uppercase tracking-widest text-faint">
                Stack
              </p>
              <p className="mt-0.5 text-sm font-semibold">Kotlin · Compose · Python</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Roles strip */}
      <Container className="mt-16">
        <div className="flex flex-wrap items-center gap-2">
          {roles.map((r) => (
            <span
              key={r}
              className="glass rounded-full px-3.5 py-1.5 text-xs font-medium text-dim"
            >
              {r}
            </span>
          ))}
        </div>
      </Container>

      <div className="mt-16">
        <Marquee />
      </div>
    </section>
  );
}
