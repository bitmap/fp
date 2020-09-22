import { untilReject, resolveFalse, untilFirst } from './utils/until'
import curry from './curry'

const any = (predicate, list) => untilFirst(untilReject(predicate), resolveFalse, true, list)

export default curry(any)
