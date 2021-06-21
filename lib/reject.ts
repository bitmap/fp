import { resolve } from "./utils/resolve";
import { curry } from "./curry";

/**
 * Rejects items from a list according to predicate. Opposite of {@link `filter`}.
 * `reject` args are curried.
 *
 * `reject :: (a -> boolean) -> [a] -> [b]`
 */
export const reject = curry(resolve(false));
