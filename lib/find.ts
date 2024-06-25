import { curry } from "./curry";

/**
 * Returns first item in a list that meets the condition. If no item meets the
 * criteria, it returns undefined. `find` args are curried.
 *
 * `find :: (a -> boolean) -> [a] -> a | undefined`
 */
export const find = curry(<T>(predicate: (value: T) => boolean, list: T[]): T | undefined =>
  list.find(predicate),
);
