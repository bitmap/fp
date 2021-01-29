import { curry } from './curry'

/**
 * Returns true if any items in list meet the condition. `any` args are curried.
 *
 * `any :: (a -> boolean) -> [a] -> boolean`
 */
export const any = curry(
  (predicate: (value: any) => boolean, list: any[]): boolean => list.some(predicate),
)
