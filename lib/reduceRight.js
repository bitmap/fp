import reduce from './reduce'
import reverse from './reverse'

const reduceRight = (reducer, initial, items) => reduce(reducer, initial, reverse(items))

export default reduceRight
