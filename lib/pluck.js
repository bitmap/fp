import { curry } from './curry'
import { map } from './map'
import { prop } from './prop'

export const pluck = curry((key, list) => map(item => prop(key, item), list))
