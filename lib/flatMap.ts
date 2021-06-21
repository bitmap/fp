import { curry } from "./curry";

export const flatMap = curry(
  (func: (value: any) => any, list: Array<any>) => list.flatMap(func),
);
