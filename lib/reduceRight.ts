import { fold } from './utils/fold'
import { curry } from './curry'

/**
 * Reduce values in a list to a single value according to a reducer function,
 * from right to left. `reduceRight` args are curried.
 *
 * `reduceRight :: ((a, b) -> a) -> a -> [b] -> a`
 */
export const reduceRight = curry(fold(true))
