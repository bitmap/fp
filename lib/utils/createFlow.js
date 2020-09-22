import reduce from '../reduce'
import reduceRight from '../reduceRight'

const createFlow = (fromRight = false) =>
  (...funcs) => initial => {
    const reducer = (acc, func) => func(acc)
    if (fromRight) return reduceRight(reducer, initial, funcs)
    return reduce(reducer, initial, funcs)
  }

export default createFlow
