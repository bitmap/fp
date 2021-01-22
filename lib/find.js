import { curry } from './curry'

export const find = curry((predicate, list) => list.find(predicate))
