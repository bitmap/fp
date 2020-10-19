import curry from './curry'
import reduce from './reduce'

const omit = curry((keys, object) => reduce((obj, key) => {
  if (object && object.hasOwnProperty(key)) {
    delete obj[key]
  }
  return obj
}, Object.assign({}, object), keys))

export default omit
