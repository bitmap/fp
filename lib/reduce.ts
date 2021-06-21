import { fold } from "./utils/fold";
import { curry } from "./curry";

/**
 * Reduce values in a list to a single value according to a reducer function.
 * `reduce` args are curried.
 *
 * `reduce :: ((a, b) -> a) -> a -> [b] -> a`
 */
export const reduce = curry(fold(false));
