import { copy } from './copy'
import { curry } from './curry'

export const prepend = curry((item, list) => {
  const newList = copy(list)
  newList.unshift(item)
  return newList
})
