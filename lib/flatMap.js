import { curry } from './curry'

export const flatMap = curry((func, list) => list.flatMap(func))
