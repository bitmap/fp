/**
 * Returns true if value is undefined
 *
 * `isUndefined :: a -> boolean`
 */
export const isUndefined = (data: unknown): data is undefined => typeof data === 'undefined'
