import { curry } from './curry'

export const sort = curry((func, list) => [...list].sort(func))
