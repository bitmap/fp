import curry from './curry'

const drop = curry((n, list) => list.slice(n))

export default drop
