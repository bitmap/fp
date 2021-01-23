import { isArray } from './isArray'
import { isObject } from './isObject'
import { reduce } from './reduce'

/**
 * Returns a deep copy of an object or array.
 *
 * `copy :: {*} -> {*}`
 */
export const copy = <T>(source: T): T => {
  if (isObject(source)) {
    const clone = isArray(source) ? [] : {}
    return reduce((memo: T, key: Extract<keyof T, string>) => {
      memo[key] = copy(source[key])
      return memo
    }, clone, Object.keys(source))
  }

  return source as T
}
