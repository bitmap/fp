import curry from './curry'
import reduce from './reduce'
import concat from './concat'

const map = (func, items) =>
  reduce((acc, item, index, items) =>
    concat(acc, [func(item, index, items)]), [], items)

export default curry(map)
