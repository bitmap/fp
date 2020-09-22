import { untilResolve, untilFirst, resolveTrue } from './utils/until'
import curry from './curry'

const any = (predicate, list) => untilFirst(untilResolve(predicate), resolveTrue, false, list)

export default curry(any)
