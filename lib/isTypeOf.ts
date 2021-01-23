import { curry } from './curry'

/* eslint-disable no-multi-spaces */
export enum TypeOf {
  Undefined = 'undefined',
  Function  = 'function',
  Boolean   = 'boolean',
  String    = 'string',
  Number    = 'number',
  BigInt    = 'bigint',
  Symbol    = 'symbol',
  Object    = 'object',
  Null      = 'object',
}

/**
 * Evaluate the returned string from an operand
 *
 * `isTypeOf :: string -> a -> boolean`
 */
export const isTypeOf = curry(
  (type: TypeOf, operand: unknown): boolean => typeof operand === type,
)
