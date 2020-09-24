import fold from './utils/fold'
import curry from './curry'

const reduce = curry(fold(false))

export default reduce
