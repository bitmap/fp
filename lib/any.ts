import { curry } from "./curry";

/**
 * Returns true if any items in list meet the condition. `any` args are curried.
 *
 * `any :: (a -> boolean) -> [a] -> boolean`
 */
export const any = curry(
  <T>(predicate: (value: T) => boolean, list: Array<T>): boolean => list.some(predicate),
);
