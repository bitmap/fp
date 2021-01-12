import curry from './curry'

const indexOfLast = curry((value, list) => list.lastIndexOf(value))

export default indexOfLast
