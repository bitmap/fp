import { isTypeOf, TypeOf } from './isTypeOf'

/**
 * Returns true if value is undefined
 *
 * `isUndefined :: a -> boolean`
 */
export const isUndefined = isTypeOf(TypeOf.Undefined)
