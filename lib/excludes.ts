import { curry } from "./curry";

/**
 * Returns true if the item is not in list. `excludes` args are curried.
 *
 * excludes :: a -> [a] -> boolean
 */
export const excludes = curry(<T>(item: T, list: T[]): item is T => !list.includes(item));
