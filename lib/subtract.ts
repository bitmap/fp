import { curry } from "./curry";

/**
 * Subracts second value from first. `subtract` args are curried.
 *
 * `subtract :: number -> number -> number`
 */
export const subtract = curry((a: number, b: number): number => a - b);
