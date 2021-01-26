/**
 * Concatenates each list into a single list.
 *
 * `concat :: [a] -> [a] -> [a]`
 */
export const concat = <T extends any[]>(...items: T): T[] => [].concat(...items)
