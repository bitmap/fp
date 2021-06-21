import { isString } from "./isString";
import { join } from "./join";
import { split } from "./split";

/**
 * Reverse a string or items in a list. Unlike `Array.prototype.reverse`, doesn't mutate target.
 *
 * `reverse :: string -> string`
 *
 * `reverse :: [a] -> [a]`
 */
export const reverse = <T>(data: string | Array<T>): string | Array<T> => {
  const { reverse } = Array.prototype;
  const delimiter = "";

  if (isString(data)) {
    return join(delimiter, reverse.call(split(delimiter, data as string)));
  }

  return reverse.call([...data]);
};
