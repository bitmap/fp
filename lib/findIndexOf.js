import { curry } from './curry'
import { find } from './find'
import { indexOf } from './indexOf'

export const findIndexOf = curry((predicate, list) => indexOf(find(predicate, list), list))
