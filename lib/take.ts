import { curry } from './curry'

/**
 * Takes `n` items from left. `take` args are curried.
 *
 * `take :: number -> [a] -> [a]`
 */
export const take = curry(
  <T>(n: number, list: T[]): T[] => list.slice(0, n),
)
