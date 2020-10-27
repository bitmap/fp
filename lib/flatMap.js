import curry from './curry'

const flatMap = curry((func, list) => list.flatMap(func))

export default flatMap
