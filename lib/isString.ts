import { isTypeOf, TypeOf } from './isTypeOf'

/**
 * Returns true if value is a string
 *
 * `isString :: a -> boolean`
 */
export const isString = isTypeOf(TypeOf.String)
