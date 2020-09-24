import curry from './curry'

const take = curry((n, list) => list.slice(0, n))

export default take
