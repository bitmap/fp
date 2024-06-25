import { curry } from "./curry";

/**
 * Sorts items in a list according to comparator function. Unlike
 * `Array.prototype.sort`, doesn't mutate target. `sort` args are curried.
 *
 * `sort :: ((a, a) -> number) -> [a] -> [a]`
 */
export const sort = curry(<T>(compareFn: (a: any, b: any) => number, list: T[]): T[] =>
  [...list].sort(compareFn),
);
