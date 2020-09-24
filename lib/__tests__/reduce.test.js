import reduce from '../reduce'
import reduceRight from '../reduceRight'

const arr = [...Array(100).keys()]
const reducer = (acc, n) => acc + n
const sum = reduce(reducer, 0)
const result = sum(arr)
const sumRight = reduceRight(reducer, 0)
const resultRight = sumRight(arr)

describe('reduce', () => {
  it('reduces array', () => {
    expect.assertions(1)
    expect(result).toStrictEqual(4950)
  })
})

describe('reduceRight', () => {
  it('reduces array from right', () => {
    expect.assertions(1)
    expect(resultRight).toStrictEqual(4950)
  })
})
