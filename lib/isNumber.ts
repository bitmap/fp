/**
 * Returns true if value is a number
 *
 * `isNumber :: a -> boolean`
 */
export const isNumber = (data: unknown): data is number => typeof data === 'number'
