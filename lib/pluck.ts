import { curry } from "./curry";
import { map } from "./map";
import { prop } from "./prop";

/**
 * Returns map of `key` values from a list of objects. `pluck` args are curried.
 *
 * `pluck :: k -> {k:v} -> [v]`
 */
export const pluck = curry(<P extends string, V>(key: P, list: { [p in P]: V }[]) =>
  map((item) => prop(key, item), list),
);
