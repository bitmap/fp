const resolve = bool => (func, list) => {
  const { length } = list
  const result = []
  let index = 0

  while (index < length) {
    if (func(list[index]) === bool) {
      result[result.length] = list[index]
    }
    index += 1
  }
  return result
}

export default resolve
