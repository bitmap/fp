import { reduceRight } from '../lib'

const arr = [...Array(100).keys()]
const reducer = (acc, n) => acc + n
const sum = reduceRight(reducer, 0)
const result = sum(arr)

describe('reduceRight', () => {
  test('reduces array from right', () => {
    expect(result).toStrictEqual(4950)
  })
})
