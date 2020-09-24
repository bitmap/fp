import curry from './curry'

const slice = curry((from, to, list) => list.slice(from, to))

export default slice
