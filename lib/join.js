import curry from './curry'

const join = curry((seperator, list) => list.join(seperator))

export default join
