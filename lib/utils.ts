/**
 * Tiny className combiner — keeps JSX readable without pulling in a dependency.
 * Falsy values are dropped so conditional classes stay terse.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
