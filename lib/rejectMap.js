import { resolveMap } from './utils/resolveMap'
import { curry } from './curry'

export const rejectMap = curry(resolveMap(false))
