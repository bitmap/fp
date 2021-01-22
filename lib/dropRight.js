import { curry } from './curry'

export const dropRight = curry((n, list) => list.slice(0, -n))
