import { curry } from './curry'

export const isType = curry((type, data) => typeof data === type)
