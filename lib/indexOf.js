import { untilFirst, untilEquals, resolveIndex } from './utils/until'
import curry from './curry'

const indexOf = curry((value, list) =>
  untilFirst(untilEquals(value), resolveIndex, -1, list))

export default indexOf
