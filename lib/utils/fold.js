/* eslint-disable no-plusplus */
const fold = fromRight => (reducer, initial, items) => {
  const { length } = items
  let index = fromRight ? length : -1
  let acc = initial

  while ((fromRight ? index-- : ++index < length)) {
    acc = reducer(acc, items[index], index, items)
  }
  return acc
}

export default fold
