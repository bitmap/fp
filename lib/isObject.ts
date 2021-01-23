import { isTypeOf, TypeOf } from './isTypeOf'

/**
 * Returns true if value is an object
 *
 * `isObject :: a -> boolean`
 */
export const isObject = isTypeOf(TypeOf.Object)
