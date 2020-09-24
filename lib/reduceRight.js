import fold from './utils/fold'
import curry from './curry'

const reduceRight = curry(fold(true))

export default reduceRight
