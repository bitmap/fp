import curry from './curry'
import accumulate from './utils/accumulate'

const reduce = accumulate(false)

export default curry(reduce)
export { accumulate }
