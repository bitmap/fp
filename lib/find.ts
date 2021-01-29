import { curry } from './curry'

/**
 * Returns first item in a list that meets the condition. If no item meets the
 * criteria, it returns undefined. `find` args are curried.
 *
 * `find :: (a -> boolean) -> [a] -> a | undefined`
 */
export const find = curry(
  (predicate: (value: any) => boolean, list: any[]): any | undefined => list.find(predicate),
)
