import reduceUntil from './utils/reduceUntil'
import curry from './curry'

const predicate = func => item => func(item) === false
const returnVal = () => false

const any = (func, list) => reduceUntil(predicate(func), returnVal, true, list)

export default curry(any)
