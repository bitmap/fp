import { sort } from '../lib'

describe('sort', () => {
  const arr = [4, 2, 3, 1, 5]

  const sortAscending = sort((a, b) => a - b)

  test('returns sorted array', () => {
    expect(sortAscending(arr)).toEqual([1, 2, 3, 4, 5])
  })

  const sortDescending = sort((a, b) => b - a)

  test('accepts compare function', () => {
    expect(sortDescending(arr)).toEqual([5, 4, 3, 2, 1])
  })
})
