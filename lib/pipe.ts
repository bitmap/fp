import { compose } from "./compose";
import { reverseArgs } from "./reverseArgs";
/**
 * Compose unary function output from left to right. Reverse argument order of
 * {@link compose}.
 *
 * `pipe(a, b, c)(x)` is equivelent to `c(b(a(x)))`
 *
 * `pipe :: [(a -> b)] -> a -> b`
 */
export const pipe = reverseArgs(compose);
