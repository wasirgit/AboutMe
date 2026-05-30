"use client";

/**
 * Layered aurora mesh — three blurred color fields drifting slowly behind
 * the page. Pure CSS animation (GPU transform only) so it costs nothing on
 * the main thread and respects prefers-reduced-motion via globals.css.
 */
export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div
        className="animate-[aurora_22s_ease-in-out_infinite_alternate] absolute -left-[10%] -top-[15%] h-[55vh] w-[55vh] rounded-full blur-[120px] opacity-50"
        style={{
          background:
            "radial-gradient(circle at center, rgba(200,247,81,0.55), transparent 65%)",
        }}
      />
      <div
        className="animate-[aurora_26s_ease-in-out_infinite_alternate] absolute right-[-8%] top-[10%] h-[50vh] w-[50vh] rounded-full blur-[130px] opacity-40"
        style={{
          background:
            "radial-gradient(circle at center, rgba(94,233,200,0.45), transparent 65%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="animate-[aurora_30s_ease-in-out_infinite_alternate] absolute bottom-[-15%] left-[25%] h-[48vh] w-[48vh] rounded-full blur-[140px] opacity-35"
        style={{
          background:
            "radial-gradient(circle at center, rgba(124,167,255,0.4), transparent 65%)",
          animationDelay: "-12s",
        }}
      />
      {/* Vignette to seat the glow into the canvas */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, transparent 40%, var(--bg) 100%)",
        }}
      />
    </div>
  );
}
