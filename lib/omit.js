import { curry } from './curry'
import { reduce } from './reduce'

export const omit = curry((keys, object) => reduce(
  (memo, key) => {
    // eslint-disable-next-line no-unused-vars
    const { [key]: _, ...rest } = memo
    return rest
  },
  object,
  keys,
))
