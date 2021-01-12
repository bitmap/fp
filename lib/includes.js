import curry from './curry'

const includes = curry((value, list) => list.includes(value))

export default includes
