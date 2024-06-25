import { curry } from "./curry";

/**
 * Returns true if all items in list meet the condition. `all` args are curried.
 *
 * `all :: (a -> boolean) -> [a] -> boolean`
 */
export const all = curry(<T, P extends (value: T) => boolean>(predicate: P, list: T[]): boolean =>
  list.every(predicate)
);
