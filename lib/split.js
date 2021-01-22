import { curry } from './curry'

export const split = curry((delimiter, list) => list.split(delimiter))
