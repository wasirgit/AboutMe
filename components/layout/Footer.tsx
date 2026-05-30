import { Linkedin, Github, Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Section";
import { navLinks, site } from "@/lib/data";

const socials = [
  { href: site.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: site.github, icon: Github, label: "GitHub" },
  { href: `mailto:${site.email}`, icon: Mail, label: "Email" },
  { href: site.whatsappUrl, icon: MessageCircle, label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--hair)] py-14">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <a
              href="#top"
              className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight"
            >
              {site.shortName}
              <span className="accent-text">.</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-dim">
              Senior Android &amp; AI-focused mobile architect, building production-scale systems
              from {site.location} for teams worldwide.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-2.5" aria-label="Footer">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-dim transition-colors hover:text-[var(--text)]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <s.icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[var(--hair)] pt-6 text-xs text-faint sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Crafted with intent.
          </p>
          <p className="font-[family-name:var(--font-mono)]">
            Built with Next.js · Tailwind · Framer Motion
          </p>
        </div>
      </Container>
    </footer>
  );
}
