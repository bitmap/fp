import { curry } from "./curry";

/**
 * Divides second value by first value. `divideBy` args are curried.
 *
 * `divideBy :: number -> number -> number`
 */
export const divideBy = curry((a: number, b: number): number => b / a);
