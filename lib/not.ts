/**
 * Returns a negated version of a predicate function.
 *
 * `not :: (a -> boolean) -> (a -> boolean)`
 */
export function not<T>(predicate: (...args: T[]) => boolean) {
  return (...args: T[]): boolean => !predicate(...args);
}
