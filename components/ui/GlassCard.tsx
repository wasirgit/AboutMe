"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

/**
 * Glass panel with a cursor-tracking spotlight. A radial highlight follows the
 * pointer via CSS custom properties (no re-renders), giving cards a premium,
 * tactile hover without hurting performance.
 */
export function GlassCard({
  children,
  className,
  spotlight = true,
}: {
  children: ReactNode;
  className?: string;
  spotlight?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (!spotlight || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn(
        "group/card glass relative overflow-hidden rounded-[var(--radius-card)] transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-[var(--hair-strong)]",
        className
      )}
    >
      {spotlight ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
          style={{
            background:
              "radial-gradient(360px circle at var(--mx) var(--my), rgba(200,247,81,0.12), transparent 70%)",
          }}
        />
      ) : null}
      {children}
    </div>
  );
}
