import { curry } from './curry'

type Type =
  | 'undefined'
  | 'function'
  | 'boolean'
  | 'string'
  | 'number'
  | 'bigint'
  | 'symbol'
  | 'object'


/**
 * Evaluate the returned string from an operand
 *
 * `isTypeOf :: string -> a -> boolean`
 */
export const isTypeOf = curry(
  <T>(type: Type, operand: T): operand is T => typeof operand === type,
)
