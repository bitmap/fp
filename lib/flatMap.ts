import { curry } from './curry'

export const flatMap = curry(
  (func: (value: any) => any, list: any[]) => list.flatMap(func),
)
