import { curry } from './curry'

/**
 * Returns true if the item is in list. `includes` args are curried.
 *
 * includes :: a -> [a] -> boolean
 */
export const includes = curry(
  <T>(item: T, list: T[]): item is T => list.includes(item),
)
