import { curry } from "./curry";

/**
 * Takes `n` items from right. `takeRight` args are curried.
 *
 * `takeRight :: number -> [a] -> [a]`
 */
export const takeRight = curry(
  <T>(n: number, list: Array<T>): Array<T> => list.slice(-n, list.length),
);
