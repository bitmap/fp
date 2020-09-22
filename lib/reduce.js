import curry from './curry'

const reduce = (reducer, initial, items) => {
  let index = 0
  let acc = initial

  while (index < items.length) {
    acc = reducer(acc, items[index], index, items)
    index += 1
  }
  return acc
}

export default curry(reduce)
