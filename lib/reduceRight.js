import { fold } from './utils/fold'
import { curry } from './curry'

export const reduceRight = curry(fold(true))
