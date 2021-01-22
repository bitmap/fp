import { curry } from './curry'

export const take = curry((n, list) => list.slice(0, n))
