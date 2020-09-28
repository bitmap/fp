import { filter } from '..'

describe('filter', () => {
  const isEven = n => n % 2 === 0
  const isOdd = n => n % 2 !== 0
  const filterEven = filter(isOdd)
  const filterOdd = filter(isEven)
  const odds = filterEven([1, 2, 3, 4])
  const evens = filterOdd([1, 2, 3, 4])

  it('filters even numbers', () => {
    expect.assertions(1)
    expect(odds).toStrictEqual([1, 3])
  })

  it('filters odd numbers', () => {
    expect.assertions(1)
    expect(evens).toStrictEqual([2, 4])
  })
})
