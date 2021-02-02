/**
 * Drops the last item in a list. `dropLast` args are curried.
 *
 * dropLast :: number -> [a] -> [a]
 */
export const dropLast = <T>(list: T[]): T[] => list.slice(0, list.length - 1)
