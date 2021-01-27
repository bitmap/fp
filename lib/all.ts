import { curry } from './curry'

/**
 * Returns true if all items in list meet the condition. `all` args are curried.
 *
 * `all :: (a -> boolean) -> [a] -> boolean`
 */
export const all = curry(
  <T>(predicate: (value: T) => boolean, list: T[]): boolean => list.every(predicate),
)
