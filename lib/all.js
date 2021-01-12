import curry from './curry'

const all = curry((predicate, list) => list.every(predicate))

export default all
