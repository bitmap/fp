import { curry } from './curry'

export const insertAll = curry((start, items, list) => {
  const newList = [...list]
  newList.splice(start, 0, ...items)
  return newList
})
