import { curry } from './curry'

/**
 * Returns a new string by concatenating a list seperated by the
 * specified separator. `join` args are curried.
 *
 * `join :: string -> [a] -> string`
 */
export const join = curry(
  <T>(separator: string, list: T[]): string => list.join(separator),
)
