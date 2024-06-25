import { copy } from "./copy";
import { curry } from "./curry";

/**
 * Insert items into a list. Unlike `Array.prototype.splice`, doesn't mutate
 * target. `insterAll` args are curried.
 *
 * `insterAll :: number -> [a] -> [a] -> [a]`
 */
export const insertAll = curry(<T>(start: number, items: T[], list: T[]): T[] => {
  const newList = copy(list);
  newList.splice(start, 0, ...items);
  return newList;
});
