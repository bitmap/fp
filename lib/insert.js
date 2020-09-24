import curry from './curry'

const insert = curry((start, item, list) => {
  const newList = [...list]
  newList.splice(start, 0, item)
  return newList
})

export default insert
