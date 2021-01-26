/**
 * Returns true if value is an array (list)
 *
 * `isArray :: a -> boolean`
 */
export const isArray = (data: unknown): data is any[] => Array.isArray(data)
