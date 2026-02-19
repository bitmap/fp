import { curry } from "./curry";

/**
 * Combine multiple arrays into tuples.
 *
 * `zip :: [a] → [b] → [[a,b]]`
 */
export const zip = curry(<T, U>(a: T[], b: U[]): [T, U][] => {
  const zipped: [T, U][] = [];

  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    zipped.push([a[i], b[i]]);
  }

  return zipped;
});
