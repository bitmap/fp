import curry from './curry'
import reduce from './reduce'

const pick = curry((keys, object) => reduce((obj, key) => {
  if (object.hasOwnProperty(key)) {
    obj[key] = object[key]
  }
  return obj
}, {}, keys))

export default pick
