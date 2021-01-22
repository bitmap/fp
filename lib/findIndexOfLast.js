import curry from './curry'
import findLast from './findLast'
import indexOfLast from './indexOfLast'

const findIndexOfLast = curry((predicate, list) => indexOfLast(findLast(predicate, list), list))

export default findIndexOfLast
