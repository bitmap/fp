import slice from './slice'

const splice = (list, index, deleteCount, ...items) => {
  const start = index < 0 ? index + list.length : index
  const count = deleteCount < 0 ? 0 : deleteCount
  const head = slice(0, start)
  const tail = slice((start + count), list.length)

  return [...head(list), ...items, ...tail(list)]
}

export default splice
