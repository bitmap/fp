import { curry } from "../curry";

export const resolve = (bool: boolean) =>
  curry(<T, P extends (value: T) => typeof bool>(predicate: P, list: T[]): T[] => {
    const { length } = list;
    const result = [];
    let index = 0;

    while (index < length) {
      if (predicate(list[index]) === bool) {
        result[result.length] = list[index];
      }
      index += 1;
    }
    return result;
  });
