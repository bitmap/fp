import isString from './utils/isString'
import join from './join'
import split from './split'

const reverse = data => {
  const { reverse } = Array.prototype
  const delimiter = ''

  if (isString(data)) {
    return join(delimiter, reverse.call(split(delimiter, data)))
  }

  return reverse.call([...data])
}

export default reverse
