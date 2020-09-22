import reduceUntil from './utils/reduceUntil'
import curry from './curry'

const predicate = value => item => item === value
const returnVal = (_, index) => index

const includes = (value, list) => reduceUntil(predicate(value), returnVal, -1, list)

export default curry(includes)
