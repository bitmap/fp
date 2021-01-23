/**
 * Concatenates each array argument into a single array
 *
 * `concat :: [a] -> [a] -> [a]`
 */
export const concat = <T extends any[]>(...lists: T): T[] => [].concat(...lists)
