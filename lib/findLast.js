import { curry } from './curry'
import { reverse } from './reverse'

export const findLast = curry((predicate, list) => reverse(list).find(predicate))
