import { copy } from "./copy";
import { curry } from "./curry";

/**
 * Appends an item to the end of a list. `append` args are curried.
 *
 * `append :: a -> [b] -> [b, a]`
 */
export const append = curry(<T>(item: T, list: T[]): T[] => {
  const newList = copy(list);
  newList.push(item);
  return newList;
});
