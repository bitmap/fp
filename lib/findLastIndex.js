import { untilResolve, untilLast, resolveIndex } from './utils/until'
import curry from './curry'

const findLastIndex = (predicate, list) => untilLast(untilResolve(predicate), resolveIndex, -1, list)

export default curry(findLastIndex)
