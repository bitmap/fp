import { curry } from './curry'

/**
 * Returns true if all items in list meet the condition. `all` args are curried.
 *
 * `all :: (a -> boolean) -> [a] -> boolean`
 */
export const all = curry(
  (predicate: (value: any) => boolean, list: any[]): boolean => list.every(predicate),
)
