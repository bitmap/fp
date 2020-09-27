import curry from './curry'

const sort = curry((func, list) => [...list].sort(func))

export default sort
