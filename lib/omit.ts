import { extract } from './utils/extract'
import { curry } from './curry'

export const omit = curry(extract(false))
