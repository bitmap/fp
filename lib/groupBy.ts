import { curry } from "./curry";

/**
 * Returns an object with keys being the result of the given function and values
 * being arrays of the items in the original array that produced the key.
 *
 * groupBy :: (a -> string) -> [a] -> { [string]: [a] }
 */
export const groupBy = curry(
  <K extends PropertyKey, T extends Record<K, unknown>>(
    keySelector: (item: T) => K,
    items: Iterable<T>,
  ): Partial<Record<K, T[]>> => Object.groupBy(items, keySelector),
);
