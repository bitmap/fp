import { untilFirst, untilResolve, resolveTrue } from './utils/until'
import curry from './curry'

const any = curry((predicate, list) =>
  untilFirst(untilResolve(predicate), resolveTrue, false, list))

export default any
