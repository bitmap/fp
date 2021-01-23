import { isTypeOf, TypeOf } from './isTypeOf'

/**
 * Returns true if value is a number
 *
 * `isNumber :: a -> boolean`
 */
export const isNumber = isTypeOf(TypeOf.Number)
