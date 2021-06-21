import { curry } from "./curry";

/**
 * Clips value in mix/max range. `clamp` args are curried.
 *
 * `clamp :: number -> number -> number -> number`
 */
export const clamp = curry(
  (min: number, max: number, value: number): number => Math.min(Math.max(value, min), max),
);
