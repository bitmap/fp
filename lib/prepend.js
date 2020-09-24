import copy from './copy'
import curry from './curry'

const prepend = curry((item, list) => {
  const newList = copy(list)
  newList.unshift(item)
  return newList
})

export default prepend
