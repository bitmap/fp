import { curry } from './curry'

export const indexOfLast = curry((value, list) => list.lastIndexOf(value))
