"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Dark/light switch. Renders a stable placeholder until mounted to avoid a
 * hydration mismatch (the server can't know the resolved theme).
 */
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="glass relative flex h-10 w-10 items-center justify-center rounded-full text-[var(--text)] transition-colors hover:border-[var(--color-accent)]"
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted ? (
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25 }}
          >
            {isDark ? <Moon size={17} /> : <Sun size={17} />}
          </motion.span>
        ) : (
          <span className="h-[17px] w-[17px]" />
        )}
      </AnimatePresence>
    </button>
  );
}
