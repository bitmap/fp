import { fold } from './utils/fold'
import { curry } from './curry'

export const reduce = curry(fold(false))
