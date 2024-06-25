/**
 * Drops the first item in a list. `dropFirst` args are curried.
 *
 * `dropFirst :: number -> [a] -> [a]`
 */
export const dropFirst = <T>(list: T[]): T[] => list.slice(1);
