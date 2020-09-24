import copy from './copy'
import curry from './curry'

const append = curry((item, list) => {
  const newList = copy(list)
  newList.push(item)
  return newList
})

export default append
