import curry from './curry'

const slice = (from, to, list) => {
  const { length } = list
  const end = to < 0 ? to + length : to
  let index = from < 0 ? from + length : from

  const newList = []

  while (index < end) {
    newList.push(list[index])
    index += 1
  }
  return newList
}

export default curry(slice)
