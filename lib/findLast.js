import { untilLast, untilResolve, resolveItem } from './utils/until'
import curry from './curry'

const findLast = curry((predicate, list) =>
  untilLast(untilResolve(predicate), resolveItem, undefined, list))

export default findLast
