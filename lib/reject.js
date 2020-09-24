import resolve from './utils/resolve'
import curry from './curry'

const reject = curry(resolve(false))

export default reject
