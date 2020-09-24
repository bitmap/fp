const compose = (...funcs) => x => funcs.reduceRight((y, f) => f(y), x)

export default compose
