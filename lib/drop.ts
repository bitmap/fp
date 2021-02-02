import { curry } from './curry'

export const drop = curry(
  <T>(n: number, list: T[]): T[] => list.slice(n),
)
