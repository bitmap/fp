import { extract } from "./utils/extract";
import { curry } from "./curry";

/**
 * Returns copy of object with specified `keys` omitted. Opposite of {@link `pick`}.
 * `omit` args are curried.
 *
 * `omit :: [k] -> {k: v} -> {k: v}`
 */
export const omit = curry(extract(false));
