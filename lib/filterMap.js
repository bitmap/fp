import resolveMap from './utils/resolveMap'
import curry from './curry'

const filterMap = curry(resolveMap(true))

export default filterMap
