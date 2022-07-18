import { filter } from "./filter";

/**
 * Returns list with all falsey values removed.
 *
 * `compact :: [a] -> [a]`
 */
export const compact = <T>(list: T[]): T[] => filter(Boolean, list);
