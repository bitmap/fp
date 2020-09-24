const compose = (...funcs) => initialValue =>
  funcs.reduceRight((acc, func) => func(acc), initialValue)

export default compose
