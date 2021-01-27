import { isTypeOf } from './isTypeOf'

/**
 * Returns true if value is a Symbol
 *
 * `isSymbol :: a -> boolean`
 */
export const isSymbol = isTypeOf('symbol')
