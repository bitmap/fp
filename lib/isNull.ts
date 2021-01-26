/**
 * Returns true if value is null
 *
 * `isNull :: a -> boolean`
 */
export const isNull = (data: unknown): data is null => data === null
