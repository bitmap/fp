import curry from './curry'
import reverse from './reverse'

const findLast = curry((predicate, list) => reverse(list).find(predicate))

export default findLast
