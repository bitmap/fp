import { curry } from './curry'

/**
 * Returns a new string by concatenating an array seperated by the
 * specified delimiter. `join` args are curried.
 *
 * `join :: string -> [a] -> string`
 */
export const join = curry(
  <T>(delimiter: string, array: T[]): string => array.join(delimiter),
)
