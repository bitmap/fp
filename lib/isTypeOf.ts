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
  (type: Type, operand: unknown): boolean => typeof operand === type,
)
