import { curry } from "./curry";

/**
 * Drops `n` items from the end of a list. `dropRight` args are curried.
 *
 * `dropRight :: number -> [a] -> [a]`
 */
export const dropRight = curry(<T>(n: number, list: T[]): T[] => list.slice(0, -n));
