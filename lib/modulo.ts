import { curry } from "./curry";

/**
 * Returns modulo of two operands. Note that this is different than the
 * remainder (`%`) operator is JavaScript, and behaves like the mathmatical
 * definition of modulo or the `%` operator in Python. `modulo` args are
 * curried.
 *
 * `modulo :: number -> number -> number
 */
export const modulo = curry((m: number, n: number): number => ((m % n) + n) % n);
