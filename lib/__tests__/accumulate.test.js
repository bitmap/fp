import reduce from '../reduce'
import reduceRight from '../reduceRight'

describe('accumulate', () => {

  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]

  const reducer = (acc, n) => acc + n
  const sum = reduce(reducer, 0)
  const result = sum(arr)

  it('reduces array', () => {
    expect.assertions(1)
    expect(result).toStrictEqual(550)
  })

  const sumRight = reduceRight(reducer, 0)
  const resultRight = sumRight(arr)

  it('reduces array from right', () => {
    expect.assertions(1)
    expect(resultRight).toStrictEqual(550)
  })
})
