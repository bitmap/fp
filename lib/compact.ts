import { filter } from "./filter";

/**
 * Returns list with all falsey values removed.
 *
 * `compact :: [a] -> [a]`
 */
export const compact = filter(Boolean);
