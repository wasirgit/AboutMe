/**
 * Route-level loading skeleton. Mirrors the hero layout so the first paint
 * feels intentional rather than blank while fonts and JS settle.
 */
export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 pt-44 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr]">
        <div className="space-y-5">
          <div className="shimmer h-7 w-64 rounded-full" />
          <div className="shimmer h-16 w-3/4 rounded-2xl" />
          <div className="shimmer h-6 w-full rounded-xl" />
          <div className="shimmer h-6 w-2/3 rounded-xl" />
          <div className="flex gap-3 pt-4">
            <div className="shimmer h-12 w-36 rounded-full" />
            <div className="shimmer h-12 w-36 rounded-full" />
          </div>
        </div>
        <div className="shimmer hidden aspect-[4/5] w-full max-w-sm rounded-[2rem] lg:block" />
      </div>
    </div>
  );
}
