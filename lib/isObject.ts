import { isTypeOf } from './isTypeOf'

/**
 * Returns true if value is an object
 *
 * `isObject :: a -> boolean`
 */
export const isObject = isTypeOf('object')
