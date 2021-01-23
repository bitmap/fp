import { flow } from './utils/flow'

/**
 * Compose unary function output from left to right.
 *
 * `pipe(a, b, c)(x)` is equivelent to `c(b(a(x)))`
 *
 * `pipe :: [(a -> b)] -> a -> b`
 */
export const pipe = flow(false)
