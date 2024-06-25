import { curry } from "./curry";

/**
 * Returns an object with keys being the result of the given function and values
 * being arrays of the items in the original array that produced the key.
 *
 * groupBy :: (a -> string) -> [a] -> { [string]: [a] }
 */
export const __groupBy = curry(
  <T extends Record<string, any>, K extends keyof T>(getKey: (item: T) => K, data: T[]) => {
    return data.reduce<Partial<Record<K, T[]>>>((acc, item) => {
      const key = getKey(item);
      console.log(key, acc[key]);
      acc[key] = acc[key] ?? [];
      acc[key]?.push(item);
      return acc;
    }, {});
  },
);

export const groupBy = curry(
  <K extends PropertyKey, T extends Record<K, any>>(
    keySelector: (item: T) => K,
    items: Iterable<T>,
  ): Partial<Record<K, T[]>> => Object.groupBy(items, keySelector),
);
