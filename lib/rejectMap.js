import resolveMap from './utils/resolveMap'
import curry from './curry'

const rejectMap = curry(resolveMap(false))

export default rejectMap
