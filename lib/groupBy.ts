import { curry } from "./curry";
import { reduce } from "./reduce";

export const groupBy = curry(<T extends Record<any, any>, K extends keyof any>(
  getKey: (item: T) => K,
  list: T[],
): Record<K, T[]> => reduce(
    (acc, item) => {
      const key = getKey(item);
      (acc[key] = acc[key] || []).push(item);
      return acc;
    },
    {} as Record<K, T[]>,
    list,
  ));
