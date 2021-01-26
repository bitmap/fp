/**
 * Returns true if value is a boolean
 *
 * `isBoolean :: a -> boolean`
 */
export const isBoolean = (data: unknown): data is boolean => typeof data === 'boolean'
