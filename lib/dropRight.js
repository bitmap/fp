import curry from './curry'

const dropRight = curry((n, list) => list.slice(0, -n))

export default dropRight
