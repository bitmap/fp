import { curry } from "./curry";
import { reduce } from "./reduce";

/**
 * Returns an object with keys being the result of the given function and values
 * being arrays of the items in the original array that produced the key.
 *
 * groupBy :: (a -> string) -> [a] -> { [string]: [a] }
 */
export const groupBy = curry(
  <T extends Record<string, any>>(getKey: (item: T) => keyof T) =>
    reduce((acc, item) => {
      const key = getKey(item);
      acc[key] = acc[key] || [];
      acc[key].push(item);
      return acc;
    }, Object.create(null)),
);
