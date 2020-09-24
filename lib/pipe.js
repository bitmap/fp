const pipe = (...funcs) => initialValue =>
  funcs.reduce((acc, func) => func(acc), initialValue)

export default pipe
