import { curry } from './curry'

export const drop = curry((n, list) => list.slice(n))
