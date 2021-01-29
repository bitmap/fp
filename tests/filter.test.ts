import { filter } from '../lib'

describe('filter', () => {
  const isEven = (n: number): boolean => n % 2 === 0
  const isOdd = (n: number): boolean => n % 2 !== 0
  const filterEven = filter(isOdd)
  const filterOdd = filter(isEven)
  const odds = filterEven([1, 2, 3, 4])
  const evens = filterOdd([1, 2, 3, 4])

  test('filters even numbers', () => {
    expect(odds).toEqual([1, 3])
  })

  test('filters odd numbers', () => {
    expect(evens).toEqual([2, 4])
  })
})
