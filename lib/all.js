import { curry } from './curry'

export const all = curry((predicate, list) => list.every(predicate))
