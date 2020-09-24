import curry from './curry'

const insertAll = curry((start, items, list) => {
  const newList = [...list]
  newList.splice(start, 0, ...items)
  return newList
})

export default insertAll
