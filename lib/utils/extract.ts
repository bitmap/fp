import { filter } from "../filter";
import { includes } from "../includes";
import { excludes } from "../excludes";

export function extract(keep: boolean) {
  return <T, R extends Record<string, T>, K extends Extract<keyof R, string>>(
    keys: K[],
    object: R,
  ): Record<string, T> => {
    function keysFilter([key]: K): boolean {
      const pick = includes(key);
      const omit = excludes(key);
      return keep ? pick(keys) : omit(keys);
    }

    const filtered = filter(keysFilter, Object.entries(object));

    return Object.fromEntries(filtered as Iterable<readonly T[]>);
  };
}
