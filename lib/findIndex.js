import reduceUntil from './utils/reduceUntil'
import curry from './curry'

const predicate = func => item => func(item) === true
const returnVal = (_, index) => index

const findIndex = (func, list) => reduceUntil(predicate(func), returnVal, -1, list)

export default curry(findIndex)
