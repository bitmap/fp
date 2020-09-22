import { untilEquals, untilFirst, resolveIndex } from './utils/until'
import curry from './curry'

const includes = (value, list) => untilFirst(untilEquals(value), resolveIndex, -1, list)

export default curry(includes)
