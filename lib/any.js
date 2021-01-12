import curry from './curry'

const any = curry((predicate, list) => list.some(predicate))

export default any
