import reduceUntil from './utils/reduceUntil'
import curry from './curry'

const predicate = value => item => item === value
const returnVal = () => true

const includes = (value, list) => reduceUntil(predicate(value), returnVal, false, list)

export default curry(includes)
