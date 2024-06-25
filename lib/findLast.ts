import { curry } from "./curry";
import { reverse } from "./reverse";
type P<T> = T extends (value: T, index: number, array: T[]) => boolean ? T : never;
/**
 * Returns last item in a list that meets the condition. If no item meets the
 * criteria, it returns undefined. `findLast` args are curried.
 *
 * `findLast :: (a -> boolean) -> [a] -> a | undefined`
 */
export const findLast = curry(<T>(predicate: P<T>, list: T[]): T | undefined =>
  (reverse(list) as T[]).find(predicate),
);
