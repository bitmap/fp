import { extract } from "./utils/extract";
import { curry } from "./curry";

/**
 * Returns copy of object with specified `keys` and all other properties omitted.
 * Opposite of {@link `omit`}. `pick` args are curried.
 *
 * `pick :: [k] -> {k: v} -> {k: v}`
 */
export const pick = curry(extract(true));
