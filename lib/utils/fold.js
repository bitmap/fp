export const fold = fromRight => (reducer, initial, items) => {
  const { length } = items
  let index = fromRight ? length : -1
  let acc = initial

  // eslint-disable-next-line no-plusplus
  while ((fromRight ? index-- : ++index < length)) {
    acc = reducer(acc, items[index], index, items)
  }
  return acc
}
