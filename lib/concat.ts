/**
 * Concatenates each list into a single list.
 *
 * `concat :: [a] -> [a] -> [a]`
 */
export const concat = <T extends unknown[]>(...items: T): T[] => Array.prototype.concat(...items);
