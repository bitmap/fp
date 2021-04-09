import { indexOf } from './utils/indexOf'
import { curry } from './curry'

/**
 * Return index of first found item in list. If arg is a predicate function,
 * returns index of the first item in a list that meets the condition. If no
 * item meets the criteria, it returns -1. `position` args are curried.
 *
 * `position :: a | (a -> boolean) -> [a] -> number | undefined`
 */
export const position = curry(indexOf(false))
