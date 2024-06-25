import { curry } from "./curry";

/**
 * Splits a string by delimiter into a list. `split` args are curried.
 *
 * `split :: string -> string -> [string]`
 */
export const split = curry((delimiter: string, string: string): string[] =>
  string.split(delimiter),
);
