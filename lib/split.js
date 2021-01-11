import curry from './curry'

const split = curry((delimiter, list) => list.split(delimiter))

export default split
