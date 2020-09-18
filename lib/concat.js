import reduce from './reduce'

const concat = (...args) =>
  reduce((acc, items) => {
    acc.push(...items)
    return acc
  }, [], args)

export default concat
