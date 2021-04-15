import { curry } from './curry'

/**
 * Divides first value by second value. `divide` args are curried.
 *
 * `divide :: number -> number -> number`
 */
export const divide = curry((a: number, b: number): number => a / b)
