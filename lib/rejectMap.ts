import { resolveMap } from "./utils/resolveMap";
import { curry } from "./curry";

/**
 * Rejects items from a list according to predicate, and then applies function to each item.
 * Opposite of {@link `filterMap`}. `rejectMap` args are curried.
 *
 * `rejectMap :: (a -> boolean) -> (a -> b) -> [a] -> [b]`
 */
export const rejectMap = curry(resolveMap(false));
