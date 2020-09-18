import curry from './curry'
import reduce from './reduce'
import concat from './concat'

const filter = (func, items) =>
  reduce(
    (acc, item) =>
      func(item)
        ? concat(acc, [item])
        : acc,
    [], items
  )

export default curry(filter)
