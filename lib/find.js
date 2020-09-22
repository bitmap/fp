import reduceUntil from './utils/reduceUntil'
import curry from './curry'

const predicate = func => item => func(item) === true
const returnVal = item => item

const find = (func, list) => reduceUntil(predicate(func), returnVal, undefined, list)

export default curry(find)
