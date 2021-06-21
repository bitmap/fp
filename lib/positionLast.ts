import { indexOf } from "./utils/indexOf";
import { curry } from "./curry";

/**
 * Return index of last found item in list. If arg is a predicate function,
 * returns index of the last item in a list that meets the condition. If no item
 * meets the criteria, it returns -1. `positionLast` args are curried.
 *
 * `positionLast :: (a | (a -> boolean)) -> [a] -> number | undefined`
 */
export const positionLast = curry(indexOf(true));
