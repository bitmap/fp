import reduceUntil from './utils/reduceUntil'
import curry from './curry'

const predicate = func => item => func(item) === true
const returnVal = () => true

const any = (func, list) => reduceUntil(predicate(func), returnVal, false, list)

export default curry(any)
