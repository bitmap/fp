import { curry } from "./curry";

/**
 * Starts searching from specified index, and returns true if the item is in
 * list. `includesFrom` args are curried.
 *
 * `includesFrom :: number -> a -> [a] -> boolean`
 */
export const includesFrom = curry(<T>(fromIndex: number, item: T, list: T[]): item is T =>
  list.includes(item, fromIndex),
);
