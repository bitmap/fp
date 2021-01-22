import { curry } from './curry'

export const prop = curry((prop, object) => object[prop])
