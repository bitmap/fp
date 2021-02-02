import { curry } from './curry'

export const dropRight = curry(
  <T>(n: number, list: T[]): T[] => list.slice(0, -n),
)
