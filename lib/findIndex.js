import { untilResolve, untilFirst, resolveIndex } from './utils/until'
import curry from './curry'

const findIndex = (predicate, list) => untilFirst(untilResolve(predicate), resolveIndex, -1, list)

export default curry(findIndex)
