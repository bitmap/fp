import curry from './curry'

const join = curry((delimiter, list) => list.join(delimiter))

export default join
