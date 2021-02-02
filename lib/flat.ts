import { copy } from './copy'
import { isArray } from './isArray'
import { isUndefined } from './isUndefined'

export const flat = <T>([first, ...rest]: T[]): T[] => {
  if (isUndefined(first)) return []

  let head = [copy(first)]
  const tail = flat(rest)

  if (isArray(first)) {
    head = flat(first)
  }
  return [...head, ...tail]
}
