import curry from './curry'

const indexOf = curry((value, list) => list.indexOf(value))

export default indexOf
