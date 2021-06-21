import { copy } from "./copy";
import { isArray } from "./isArray";
import { isEmpty } from "./isEmpty";
import { isUndefined } from "./isUndefined";

/**
 * Returns a flattened list. Will recursively flatten nested arrays
 *
 * `flat :: [...a, [...b, [...c]]] -> [a, b, c]`
 */
export const flat = <T>([first, ...rest]: Array<T>): Array<T> => {
  if (isUndefined(first)) return [];

  let head = [copy(first)];
  const tail = flat(rest);

  if (isArray(first) && !isEmpty(head)) {
    head = flat(first);
  }
  return [...head, ...tail];
};
