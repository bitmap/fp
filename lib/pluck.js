import curry from './curry'

const pluck = curry((key, object) => object[key])

export default pluck
