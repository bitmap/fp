import { indexOf } from './utils/indexOf'

/**
 * Return index of last found item in list. If arg is a predicate function,
 * returns index of the last item in a list that meets the condition. If no item
 * meets the criteria, it returns -1. `find` args are curried.s
 *
 * `positionLast :: (a | (a -> boolean)) -> [a] -> number | undefined`s
 */
export const positionLast = indexOf(true)
