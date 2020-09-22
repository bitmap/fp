/* eslint-disable no-plusplus */
const until = fromRight => (predicateCallback, returnCallback, initialValue, list) => {
  const { length } = list
  let index = fromRight ? length : -1

  while (fromRight ? index-- : ++index < length) {
    const current = list[index]
    if (predicateCallback(current, index)) {
      return returnCallback(current, index)
    }
  }

  return initialValue
}

const untilFirst = until(false)
const untilLast = until(true)
const untilResolve = func => item => func(item) === true
const untilReject = func => item => func(item) === false
const untilEquals = value => item => item === value

const resolveItem = item => item
const resolveIndex = (item, index) => index
const resolveTrue = () => true
const resolveFalse = () => false

export {
  untilFirst,
  untilLast,
  untilResolve,
  untilReject,
  untilEquals,

  resolveItem,
  resolveIndex,
  resolveTrue,
  resolveFalse,
}
