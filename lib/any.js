import { curry } from './curry'

export const any = curry((predicate, list) => list.some(predicate))
