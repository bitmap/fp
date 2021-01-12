import curry from './curry'

const find = curry((predicate, list) => list.find(predicate))

export default find
