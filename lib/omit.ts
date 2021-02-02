import { copy } from './copy'
import { curry } from './curry'

export const omit = curry(
  <T extends Record<string, unknown>, K extends Extract<keyof T, string>>(keys: K[], object: T): Omit<T, K> => {
    const clone = copy(object)
    for (const key of keys) {
      delete clone[key]
    }
    return clone
  },
)
