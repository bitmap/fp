import { curry } from './curry'

/**
 * Compares two items and returns true if equal. `isEqual` args are curried.
 *
 * `isEqual :: a -> b -> boolean`
 */
export const isEqual = curry(<T>(a: T, b: T): boolean => a === b)
