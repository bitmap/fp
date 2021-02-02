import { reduce } from '../lib'

const arr = [...Array(100).keys()]
const reducer = (acc: number, n: number): number => acc + n
const sum = reduce(reducer, 0)
const result = sum(arr)

describe('reduce', () => {
  test('reduces array', () => {
    expect(result).toEqual(4950)
  })
})
