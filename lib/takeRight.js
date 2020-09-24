import curry from './curry'

const takeRight = curry((n, list) => list.slice(-n, list.length))

export default takeRight
