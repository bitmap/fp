const pipe = (...funcs) => x => funcs.reduce((y, f) => f(y), x)

export default pipe
