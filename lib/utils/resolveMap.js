import reduce from '../reduce'

const resolveMap = bool => (resolver, mapper, list) => reduce(
  (acc, item) => {
    if (resolver(item) === bool){
      acc.push(mapper(item))
    }
    return acc
  },
  [], list
)

export default resolveMap
