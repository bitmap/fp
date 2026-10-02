import { curry } from "./curry";

/**
 * Returns a new array with duplicate values removed.
 *
 * `unique :: [a] -> [a]`
 *
 * @example
 * unique([1, 2, 2, 3, 1, 4]) // -> [1, 2, 3, 4]
 * unique([]) // -> []
 * unique(["a", "a", "b"]) // -> ["a", "b"]
 */
export const unique = curry(<T>(array: T[]): T[] => {
  return Array.from(new Set<T>(array));
});
