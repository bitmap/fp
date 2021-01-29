import { curry } from './curry'
import { reverse } from './reverse'

/**
 * Returns last item in a list that meets the condition. If no item meets the
 * criteria, it returns undefined. `findLast` args are curried.
 *
 * `findLast :: (a -> boolean) -> [a] -> a | undefined`
 */
export const findLast = curry(
  (predicate: (value: any) => boolean, list: any[]): any | undefined => reverse(list).find(predicate),
)
