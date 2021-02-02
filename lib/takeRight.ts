import { curry } from './curry'

/**
 * Takes `n` items from right. `takeRight` args are curried.
 *
 * takeRight :: number -> [a] -> [a]
 */
export const takeRight = curry(
  <T>(n: number, list: T[]): T[] => list.slice(-n, list.length),
)
