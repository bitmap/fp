import reduceRight from '../reduceRight'

const arr = [...Array(100).keys()]
const reducer = (acc, n) => acc + n
const sum = reduceRight(reducer, 0)
const result = sum(arr)

describe('reduceRight', () => {
  it('reduces array from right', () => {
    expect.assertions(1)
    expect(result).toStrictEqual(4950)
  })
})
