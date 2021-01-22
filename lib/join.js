import { curry } from './curry'

export const join = curry((delimiter, list) => list.join(delimiter))
