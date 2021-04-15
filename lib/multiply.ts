import { curry } from './curry'

/**
 * Multiplies two values. `multiply` args are curried.
 *
 * `multiply :: number -> number -> number`
 */
export const multiply = curry((a: number, b: number): number => a * b)
