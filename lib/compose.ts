import { flow } from "./utils/flow";

/**
 * Compose unary function output from right to left.
 *
 * `compose(a, b, c)(x)` is equivelent to `a(b(c(x)))`
 *
 * `compose :: [(a -> b)] -> a -> b`
 */
export const compose = flow(true);
