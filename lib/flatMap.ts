import { curry } from "./curry";
import { flat } from "./flat";
import { map } from "./map";

/**
 * Applies a function to items in a list and returns a flattened list. `flatMap` args are curried.
 *
 * `flatMap :: (x -> y) -> [...a, [...b, [...c]]] -> [d, e, f]`
 */
export const flatMap = curry(
  (func: (value: any) => any, list: Array<any>): Array<any> => flat(map(func, flat(list))),
);
