"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-colors duration-300 focus-visible:outline-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-accent)] text-[var(--color-accent-ink)] hover:brightness-105",
  outline:
    "border border-[var(--hair-strong)] text-[var(--text)] hover:border-[var(--color-accent)]",
  ghost: "text-[var(--text)] hover:text-[var(--color-accent)]",
};

/**
 * Magnetic-ish CTA. Scales subtly on hover/press and supports anchor or
 * button semantics depending on whether an href is provided.
 */
export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  external,
  ariaLabel,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  external?: boolean;
  ariaLabel?: string;
}) {
  const classes = cn(base, variants[variant], className);
  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 22 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        aria-label={ariaLabel}
        onClick={onClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
