/**
 * Returns true if value is a string
 *
 * `isString :: a -> boolean`
 */
export const isString = (data: unknown): data is string => typeof data === 'string'
