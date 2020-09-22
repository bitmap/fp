import curry from './curry'
import accumulate from './utils/accumulate'

const reduceRight = accumulate(true)

export default curry(reduceRight)
