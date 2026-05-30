/**
 * Single source of truth for all portfolio content.
 * Sections render from these typed structures so copy stays editable in one place.
 */

export const site = {
  name: "Asieuzzaman Wasir",
  shortName: "Wasir",
  role: "Senior Android & AI-Focused Mobile Architect",
  location: "Bangladesh",
  tagline:
    "I build production-scale mobile systems and ship AI into the apps millions actually use.",
  email: "live.wasir@gmail.com",
  whatsapp: "+8801700000000",
  whatsappUrl: "https://wa.me/8801700000000",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
  // Set by CI at build time (derived from the GitHub repo); falls back for local dev.
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  resumeUrl: "/resume.pdf",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

export const roles = [
  "Senior Android Developer",
  "Flutter Engineer",
  "AI App Engineer",
  "Backend Engineer · Python / NATS",
  "iOS Learner",
] as const;

export const stats = [
  { value: "13+", label: "Years building Android" },
  { value: "30+", label: "Production releases" },
  { value: "5", label: "Platforms shipped" },
  { value: "1M+", label: "Users served" },
] as const;

/** Rotating ticker of tech, rendered as a marquee. */
export const marquee = [
  "Kotlin",
  "Jetpack Compose",
  "Flutter",
  "SwiftUI",
  "Python",
  "FastAPI",
  "NATS",
  "FastStream",
  "Docker",
  "Firebase",
  "Hilt",
  "Coroutines",
  "GitHub Actions",
  "Terraform",
  "Clean Architecture",
  "MVVM",
] as const;

export type SkillGroup = {
  id: string;
  title: string;
  blurb: string;
  skills: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "mobile",
    title: "Mobile Development",
    blurb: "Native and cross-platform apps built to scale and last.",
    skills: [
      { name: "Kotlin", level: 96 },
      { name: "Jetpack Compose", level: 93 },
      { name: "Flutter / Dart", level: 88 },
      { name: "SwiftUI", level: 66 },
      { name: "Coroutines & Flow", level: 92 },
    ],
  },
  {
    id: "backend",
    title: "Backend Engineering",
    blurb: "Event-driven services and APIs that stay fast under load.",
    skills: [
      { name: "Python", level: 88 },
      { name: "FastAPI", level: 85 },
      { name: "NATS / FastStream", level: 82 },
      { name: "REST API Design", level: 91 },
      { name: "Firebase", level: 87 },
    ],
  },
  {
    id: "ai",
    title: "AI & Automation",
    blurb: "Bringing LLMs and on-device intelligence into real products.",
    skills: [
      { name: "LLM Integration", level: 84 },
      { name: "Prompt Engineering", level: 86 },
      { name: "On-device ML", level: 72 },
      { name: "AI Workflow Design", level: 80 },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    blurb: "Repeatable pipelines and infrastructure as code.",
    skills: [
      { name: "GitHub Actions", level: 86 },
      { name: "Docker", level: 84 },
      { name: "CI/CD for Mobile", level: 88 },
      { name: "Terraform", level: 58 },
    ],
  },
  {
    id: "architecture",
    title: "Architecture",
    blurb: "Modular systems that teams can grow into, not around.",
    skills: [
      { name: "Clean Architecture", level: 95 },
      { name: "MVVM / MVI", level: 93 },
      { name: "Modularization", level: 90 },
      { name: "Dependency Injection (Hilt)", level: 91 },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  highlights: string[];
  stack: string[];
  accent: string;
  featured?: boolean;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "ai-assistant",
    title: "Aria — AI Mobile Assistant",
    category: "AI · Android",
    year: "2025",
    featured: true,
    description:
      "A context-aware assistant that turns natural language into in-app actions, with streaming responses and on-device privacy guardrails.",
    highlights: [
      "Streaming LLM responses over a resilient socket layer",
      "Tool-calling bridge mapping intents to native modules",
      "Sub-200ms perceived latency via optimistic UI",
    ],
    stack: ["Kotlin", "Compose", "FastAPI", "LLM", "NATS"],
    accent: "#c8f751",
    github: "#",
    demo: "#",
  },
  {
    id: "modular-android",
    title: "Multi-Module Android Platform",
    category: "Architecture",
    year: "2024",
    featured: true,
    description:
      "A 40+ module Gradle architecture that cut build times in half and let four squads ship independently without stepping on each other.",
    highlights: [
      "Feature, domain, and data layers fully isolated",
      "Convention plugins for zero-config new modules",
      "52% faster incremental builds",
    ],
    stack: ["Kotlin", "Hilt", "Gradle", "Clean Arch"],
    accent: "#7cc7ff",
    github: "#",
  },
  {
    id: "vpn-swiftui",
    title: "Shield VPN — SwiftUI",
    category: "iOS · Networking",
    year: "2025",
    description:
      "A privacy-first VPN client with a fluid SwiftUI interface, live tunnel telemetry, and a one-tap connect experience.",
    highlights: [
      "NetworkExtension tunnel with live throughput stats",
      "Animated connection states in pure SwiftUI",
      "Secure credential storage in the Keychain",
    ],
    stack: ["SwiftUI", "NetworkExtension", "Keychain"],
    accent: "#b69dff",
    demo: "#",
  },
  {
    id: "nats-backend",
    title: "Pulse — Push Notification Backend",
    category: "Backend · Python",
    year: "2024",
    description:
      "An event-driven notification platform delivering millions of messages a day through NATS subjects with at-least-once guarantees.",
    highlights: [
      "FastStream consumers with backpressure handling",
      "Fan-out delivery across FCM and APNs",
      "Dockerised, horizontally scalable workers",
    ],
    stack: ["Python", "NATS", "FastStream", "Docker", "FCM"],
    accent: "#ff9d7a",
    github: "#",
  },
  {
    id: "flutter-app",
    title: "Loop — Cross-Platform Flutter App",
    category: "Flutter",
    year: "2023",
    description:
      "A single Flutter codebase shipping a pixel-consistent experience to iOS and Android, with offline-first sync and tasteful motion.",
    highlights: [
      "Offline-first repository with conflict resolution",
      "Shared design system across both platforms",
      "60fps custom transitions and hero animations",
    ],
    stack: ["Flutter", "Dart", "Firebase", "Riverpod"],
    accent: "#5ee9c8",
    demo: "#",
    github: "#",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
  achievements: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Senior Android Developer & Mobile Architect",
    company: "Independent / Contract",
    period: "2021 — Present",
    summary:
      "Lead architecture and AI integration for production mobile products serving international clients.",
    achievements: [
      "Designed multi-module architectures adopted by multiple squads",
      "Shipped the first AI assistant feature into a flagship app",
      "Built event-driven Python backends powering real-time mobile features",
    ],
  },
  {
    role: "Lead Android Engineer",
    company: "Product Studio",
    period: "2017 — 2021",
    summary:
      "Owned the Android platform end to end across a portfolio of consumer apps.",
    achievements: [
      "Migrated legacy codebases to Kotlin and MVVM",
      "Introduced CI/CD with GitHub Actions, cutting release effort by 70%",
      "Mentored a team of five engineers on clean architecture",
    ],
  },
  {
    role: "Android Developer",
    company: "Software House",
    period: "2013 — 2017",
    summary:
      "Delivered dozens of client apps across e-commerce, fintech, and media.",
    achievements: [
      "Built reusable component libraries used across projects",
      "Optimised app startup and memory for low-end devices",
      "Integrated payments, maps, and real-time messaging",
    ],
  },
  {
    role: "Junior Android Developer",
    company: "First Studio",
    period: "2012 — 2013",
    summary: "Started a 13-year journey building for the Android platform.",
    achievements: [
      "Shipped first apps to the Play Store",
      "Learned the craft of mobile UX and performance",
    ],
  },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: "android",
    title: "Android App Development",
    description:
      "Production-grade native apps in Kotlin & Compose, built to scale and ship fast.",
    icon: "Smartphone",
  },
  {
    id: "flutter",
    title: "Flutter App Development",
    description:
      "One elegant codebase, two platforms — without the cross-platform compromises.",
    icon: "Layers",
  },
  {
    id: "architecture",
    title: "Mobile Architecture Consulting",
    description:
      "Modularization, clean architecture, and build tooling that lets teams move faster.",
    icon: "Boxes",
  },
  {
    id: "ai",
    title: "AI Integration",
    description:
      "Bring LLMs, assistants, and intelligent automation into your mobile product.",
    icon: "Sparkles",
  },
  {
    id: "backend",
    title: "Backend API Development",
    description:
      "Event-driven services with Python, FastAPI, and NATS that stay fast under load.",
    icon: "Server",
  },
  {
    id: "leadership",
    title: "Technical Leadership",
    description:
      "Mentorship, code reviews, and architecture direction for growing engineering teams.",
    icon: "Compass",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Wasir rebuilt our Android architecture and the difference was night and day. Builds got faster, crashes dropped, and the team could finally ship in parallel. He thinks like an architect, not just a coder.",
    name: "Daniel Hoffmann",
    title: "CTO, Fintech Scale-up",
    initials: "DH",
  },
  {
    quote:
      "He took our vague 'we want AI in the app' idea and turned it into a feature users genuinely love. Pragmatic, fast, and deeply thoughtful about the user experience.",
    name: "Priya Nair",
    title: "Senior Product Manager",
    initials: "PN",
  },
  {
    quote:
      "One of the most reliable engineers I've worked with. He owns problems end to end, from the backend to the pixel. If you can hire him, do it before someone else does.",
    name: "Marcus Lee",
    title: "Founder, Mobile Startup",
    initials: "ML",
  },
];

export const philosophy = [
  {
    title: "Architecture is empathy",
    body: "Good architecture is a gift to the next engineer. I build systems that teams grow into, not around.",
  },
  {
    title: "AI should disappear",
    body: "The best AI features feel like the app simply got smarter — fast, private, and never in the way.",
  },
  {
    title: "Ship, then refine",
    body: "Momentum beats perfection. I get real value in front of users early, then sharpen relentlessly.",
  },
];
