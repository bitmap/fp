import { curry } from "./curry";

/**
 * Drops `n` items from the beginning of a list. `drop` args are curried.
 *
 * `drop :: number -> [a] -> [a]`
 */
export const drop = curry(
  <T>(n: number, list: Array<T>): Array<T> => list.slice(n),
);
