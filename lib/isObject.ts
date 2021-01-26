/* eslint-disable @typescript-eslint/ban-types */
/**
 * Returns true if value is an object
 *
 * `isObject :: a -> boolean`
 */
export const isObject = (data: unknown): data is object => typeof data === 'object'
