import { curry } from "./curry";

type Mapper<T, U> = (fn: (value?: T, index?: number) => U, list: T[]) => U[];

const mapper: Mapper<any, any> = (fn, list) => {
  const { length } = list;
  const result = Array(length);
  let index = 0;

  while (index < length) {
    result[index] = fn(list[index], index);
    index += 1;
  }
  return result;
};

/**
 * Apply function to each items in a list, and return a new list. `map` args are
 * curried.
 *
 * `map :: (a -> b) -> [a] -> [b]`
 */
export const map = curry(mapper);
