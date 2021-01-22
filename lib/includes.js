import { curry } from './curry'

export const includes = curry((value, list) => list.includes(value))
