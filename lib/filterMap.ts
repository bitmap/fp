import { resolveMap } from "./utils/resolveMap";
import { curry } from "./curry";

/**
 * Filters items from a list according to predicate, and then applies function to each item.
 * `filterMap` args are curried.
 *
 * `filterMap :: (a -> boolean) -> (a -> b) -> [a] -> [b]`
 */
export const filterMap = curry(resolveMap(true));
