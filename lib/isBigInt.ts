import { isTypeOf } from './isTypeOf'

/**
 * Returns true if value is an integer value larger than Number.MAX_SAFE_INTEGER
 *
 * `isBigInt :: a -> boolean`
 */
export const isBigInt = isTypeOf('bigint')
