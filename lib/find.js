import { untilFirst, untilResolve, resolveItem } from './utils/until'
import curry from './curry'

const find = (predicate, list) => untilFirst(untilResolve(predicate), resolveItem, undefined, list)

export default curry(find)
