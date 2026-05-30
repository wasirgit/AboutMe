# Asieuzzaman Wasir — Portfolio

A premium, dark-first personal portfolio for a senior Android & AI-focused mobile architect.
Built with the modern Next.js App Router stack, a hand-crafted design system, and motion that
stays out of the way.

## Stack

- **Next.js 15** (App Router, React 19, RSC)
- **TypeScript** (strict)
- **Tailwind CSS v4** (CSS-first `@theme` tokens)
- **Framer Motion** (scroll reveals, micro-interactions)
- **next-themes** (dark-first, class strategy)
- **lucide-react** (icons)
- Fonts via `next/font`: **Bricolage Grotesque** · **Manrope** · **JetBrains Mono**

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server → http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

> Requires Node 18.18+ (Node 20+ recommended).

## Design system

The entire visual language lives in `app/globals.css`:

- **Tokens** are declared in `@theme` (fonts, accent, radii, shadows, animation aliases).
- **Semantic surface variables** (`--bg`, `--text`, `--hair`, `--glass`…) flip between light and
  dark under `:root` and `.dark`.
- **Utilities** like `.glass`, `.kicker`, `.grid-bg`, `.text-gradient`, and `.shimmer` keep
  components declarative.

Aesthetic: obsidian canvas, a single electric **signal-lime** (`#c8f751`) accent, glassmorphism
panels, an animated aurora mesh, and film grain. Dark mode is the default; a toggle switches to a
warm-ivory light theme.

## Folder structure

```
.
├── app/
│   ├── layout.tsx        # fonts, metadata/SEO, JSON-LD, providers, global effects
│   ├── page.tsx          # composes the section components
│   ├── globals.css       # design system: tokens, themes, utilities, keyframes
│   ├── loading.tsx       # route-level skeleton (shimmer)
│   ├── sitemap.ts        # SEO sitemap
│   ├── robots.ts         # SEO robots
│   ├── manifest.ts       # PWA web manifest
│   └── icon.svg          # favicon (auto-wired by Next metadata)
├── components/
│   ├── effects/          # AuroraBackground, GrainOverlay
│   ├── layout/           # Navbar, Footer, ThemeToggle
│   ├── sections/         # Hero, About, Skills, Projects, Experience, Services,
│   │                     #   Testimonials, Contact
│   └── ui/               # Reusable primitives: Section, Reveal, Button,
│                         #   GlassCard, Marquee
├── lib/
│   ├── data.ts           # ALL content lives here — edit copy in one place
│   └── utils.ts          # cn() className helper
├── providers/
│   └── ThemeProvider.tsx # next-themes wrapper (dark-first)
└── public/               # static assets (add profile.jpg, resume.pdf, og image)
```

## Customizing

- **Content** → edit `lib/data.ts` (name, roles, stats, skills, projects, experience, services,
  testimonials, socials). Every section reads from here.
- **Links** → update `site.github`, `site.linkedin`, `site.whatsapp`, `site.email`, `site.url`.
- **Accent color** → change `--color-accent` in `app/globals.css` (`@theme` block).
- **Profile photo** → drop `public/profile.jpg`, then swap the placeholder block in
  `components/sections/Hero.tsx` for a `next/image`.
- **Contact form** → `components/sections/Contact.tsx` simulates submission. Point `handleSubmit`
  at a route handler, Formspree, Resend, etc.
- **OG image** → add `app/opengraph-image.png` (1200×630) and Next will wire it automatically.

## Accessibility & SEO

- Semantic landmarks, labelled controls, visible focus rings, and a skip link.
- `prefers-reduced-motion` disables animations globally.
- Metadata, Open Graph, Twitter cards, JSON-LD `Person` schema, sitemap, robots, and manifest
  ship out of the box.

## License

Personal portfolio — content © Asieuzzaman Wasir. Code free to adapt.
