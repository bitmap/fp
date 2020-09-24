import { untilLast, untilResolve, resolveIndex } from './utils/until'
import curry from './curry'

const findLastIndex = curry((predicate, list) =>
  untilLast(untilResolve(predicate), resolveIndex, -1, list))

export default findLastIndex
