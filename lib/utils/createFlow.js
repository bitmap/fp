import reduce from '../reduce'

const createFlow = (fromRight = false) =>
  (...funcs) => initial => {
    if (fromRight) funcs.reverse()
    return reduce((acc, func) => func(acc), initial, funcs)
  }

export default createFlow
