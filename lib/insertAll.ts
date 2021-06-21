import { copy } from "./copy";
import { curry } from "./curry";

/**
 * Insert items into a list. Unlike `Array.prototype.splice`, doesn't mutate
 * target. `insterAll` args are curried.
 *
 * `insterAll :: number -> [a] -> [a] -> [a]`
 */
export const insertAll = curry(
  <T>(start: number, items: Array<T>, list: Array<T>): Array<T> => {
    const newList = copy(list);
    newList.splice(start, 0, ...items);
    return newList;
  },
);
