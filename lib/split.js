import curry from './curry'

const split = curry((seperator, list) => list.split(seperator))

export default split
