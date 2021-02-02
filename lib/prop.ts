import { curry } from './curry'

/**
 * Returns the value of `key` in object. `prop` args are curried.
 *
 * prop :: a -> {a:b} -> b
 */
export const prop = curry(
  <P extends string, V>(
    key: P,
    object: { [p in P]: V } & { [key: string]: any }): V =>
    object[key],
)
