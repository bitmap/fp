import { curry } from "./curry";
import { flat } from "./flat";
import { map } from "./map";

/**
 * Applies a function to items in a list and returns a flattened list. `flatMap` args are curried.
 *
 * `flatMap :: (x -> y) -> [...a, [...b, [...c]]] -> [d, e, f]`
 */
export const flatMap = curry(<T, U>(func: (value: T, index?: number) => U | U[], list: T[]): U[] => {
  const flattened = flat(list);
  const mapped = map(func, flattened);
  return flat(mapped) as U[];
});
