import { resolve } from "./utils/resolve";
import { curry } from "./curry";

/**
 * Filters items from a list according to predicate. `filter` args are curried.
 *
 * `filter :: (a -> boolean) -> [a] -> [b]`
 */
export const filter = curry(resolve(true));
