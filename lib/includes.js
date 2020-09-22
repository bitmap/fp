import { untilFirst, untilEquals, resolveTrue } from './utils/until'
import curry from './curry'

const includes = (value, list) => untilFirst(untilEquals(value), resolveTrue, false, list)

export default curry(includes)
