import reduce from '../reduce'

const reduceUntil = (predicateCallback, returnCallback, initialValue, list) => reduce(
  (accumulator, current, index, iterator) => {
    const condition = predicateCallback(current, index)

    if (condition) {
      iterator.length = 0
      return returnCallback(current, index)
    }
    return accumulator
  }, initialValue, [...list]
)

export default reduceUntil
