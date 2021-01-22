import { reduce } from '../lib'

const arr = [...Array(100).keys()]
const reducer = (acc, n) => acc + n
const sum = reduce(reducer, 0)
const result = sum(arr)

describe('reduce', () => {
  test('reduces array', () => {
    expect(result).toStrictEqual(4950)
  })
})
