import { untilLast, untilEquals, resolveIndex } from './utils/until'
import curry from './curry'

const indexOf = curry((value, list) =>
  untilLast(untilEquals(value), resolveIndex, -1, list))

export default indexOf
