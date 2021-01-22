import { curry } from './curry'

export const slice = curry((from, to, list) => list.slice(from, to))
