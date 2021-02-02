import { curry } from './curry'
import { reduce } from './reduce'

export const pick = curry(
  <T extends Record<string, unknown>, K extends Extract<keyof T, string>>(keys: K[], object: T): Pick<T, K> =>
    reduce((memo, key) => {
      if (key in object) {
        memo[key] = object[key]
      }
      return memo
    },
    {},
    keys),
)
