import { curry } from './curry'

/**
 * Subracts first value from second. `subtractBy` args are curried.
 *
 * `subtractBy :: number -> number -> number`
 */
export const subtractBy = curry((a: number, b: number): number => b - a)
