import { untilLast, untilResolve, resolveItem } from './utils/until'
import curry from './curry'

const findLast = (predicate, list) => untilLast(untilResolve(predicate), resolveItem, undefined, list)

export default curry(findLast)
