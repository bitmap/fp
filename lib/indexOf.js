import { curry } from './curry'

export const indexOf = curry((value, list) => list.indexOf(value))
