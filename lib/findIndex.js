import { untilFirst, untilResolve, resolveIndex } from './utils/until'
import curry from './curry'

const findIndex = curry((predicate, list) =>
  untilFirst(untilResolve(predicate), resolveIndex, -1, list))

export default findIndex
