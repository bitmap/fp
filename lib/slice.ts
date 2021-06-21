import { curry } from "./curry";

/**
 * Return a sliced list. `slice` args are curried.
 *
 * `slice :: number -> number -> [a] -> [a]`
 */
export const slice = curry(
  <T>(start: number, end: number, list: Array<T>): Array<T> => list.slice(start, end),
);
