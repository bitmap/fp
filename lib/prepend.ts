import { copy } from "./copy";
import { curry } from "./curry";

/**
 * Prepends an item to the beginning of a list. `prepend` args are curried.
 *
 * `prepend :: a -> [b] -> [a, b]`
 */
export const prepend = curry((item, list) => {
  const newList = copy(list);
  newList.unshift(item);
  return newList;
});
