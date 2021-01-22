export const compose = (...funcs) => initialValue =>
  funcs.reduceRight((acc, func) => func(acc), initialValue)
