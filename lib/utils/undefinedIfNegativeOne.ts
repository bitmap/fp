import { isEqual } from "../isEqual";

/**
 * Normalizes output of some operations that return -1 as index of item is not found.
 *
 * `undefinedIfNegativeOne :: a -> a | undefined`
 */
export const undefinedIfNegativeOne = <N extends number>(n: N): N | undefined =>
  isEqual(-1)(n) ? undefined : n;
