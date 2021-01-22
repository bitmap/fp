import { curry } from './curry'

export const map = curry((func, list) => {
  const { length } = list
  const result = Array(length)
  let index = 0

  while (index < length) {
    result[index] = func(list[index])
    index += 1
  }
  return result
})
