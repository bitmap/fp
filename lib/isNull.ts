import { isTypeOf, TypeOf } from './isTypeOf'

/**
 * Returns true if value is null
 *
 * `isNull :: a -> boolean`
 */
export const isNull = (operand: unknown): boolean =>
  isTypeOf(TypeOf.Null, operand) && operand === null
