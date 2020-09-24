import { untilFirst, untilReject, resolveFalse } from './utils/until'
import curry from './curry'

const all = curry((predicate, list) =>
  untilFirst(untilReject(predicate), resolveFalse, true, list))

export default all
