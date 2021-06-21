/**
 * Returns the last item in a list.
 *
 * `last :: [a] -> a`
 */
export const last = <T>(list: Array<T>): T => list[list.length - 1];
