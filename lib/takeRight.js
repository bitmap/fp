import { curry } from './curry'

export const takeRight = curry((n, list) => list.slice(-n, list.length))
