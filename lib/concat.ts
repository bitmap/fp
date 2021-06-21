/**
 * Concatenates each list into a single list.
 *
 * `concat :: [a] -> [a] -> [a]`
 */
export const concat = <T extends Array<unknown>>(...items: T): Array<T> =>
  Array.prototype.concat(...items);
