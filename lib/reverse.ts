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
export const reverse = <T>(data: string | T[]): string | T[] => {
  const delimiter = "";

  if (isString(data)) {
    return join(delimiter, Array.prototype.reverse.call(split(delimiter, data as string)));
  }

  return Array.prototype.reverse.call([...data]);
};
