import curry from './curry'

const prop = curry((prop, object) => object[prop])

export default prop
