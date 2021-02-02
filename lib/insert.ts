import { copy } from './copy'
import { curry } from './curry'

/**
 * Insert item into a list. Unlike `Array.prototype.splice`, doesn't mutate
 * target. `insert` args are curried.
 *
 * `insert :: number -> a -> [a] -> [a]`
 */
export const insert = curry(
  <T>(start: number, item: T, list: T[]): T[] => {
    const newList = copy(list)
    newList.splice(start, 0, item)
    return newList
  },
)
