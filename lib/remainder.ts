import { curry } from './curry'

/**
 * Returns remainder of two operands. `remainder` args are
 * curried.
 *
 * `remainder :: number -> number -> number
 */
export const remainder = curry((a: number, n: number): number => a % n)
