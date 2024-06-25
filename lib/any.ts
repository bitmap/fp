import { curry } from "./curry";

/**
 * Returns true if any items in list meet the condition. `any` args are curried.
 *
 * `any :: (a -> boolean) -> [a] -> boolean`
 */
export const any = curry(
  <T, P extends (value: T) => boolean>(
    predicate: P,
    list: T[]
  ): boolean => list.some(predicate)
);
