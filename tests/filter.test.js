import { filter } from '../lib'

describe('filter', () => {
  const isEven = n => n % 2 === 0
  const isOdd = n => n % 2 !== 0
  const filterEven = filter(isOdd)
  const filterOdd = filter(isEven)
  const odds = filterEven([1, 2, 3, 4])
  const evens = filterOdd([1, 2, 3, 4])

  test('filters even numbers', () => {
    expect(odds).toStrictEqual([1, 3])
  })

  test('filters odd numbers', () => {
    expect(evens).toStrictEqual([2, 4])
  })
})
