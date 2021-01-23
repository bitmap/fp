import { isTypeOf, TypeOf } from './isTypeOf'

/**
 * Returns true if value is a boolean
 *
 * `isBoolean :: a -> boolean`
 */
export const isBoolean = isTypeOf(TypeOf.Boolean)
