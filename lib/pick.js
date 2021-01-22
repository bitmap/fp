import { curry } from './curry'
import { reduce } from './reduce'

export const pick = curry((keys, object) => reduce(
  (memo, key) => {
    if (key in object) {
      memo[key] = object[key]
    }
    return memo
  },
  {},
  keys,
))
