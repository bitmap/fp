import { sort } from '..'

describe('sort', () => {
  const arr = [4, 2, 3, 1, 5]

  const sortAscending = sort((a, b) => a - b)

  test('returns sorted array', () => {
    expect(sortAscending(arr)).toStrictEqual([1, 2, 3, 4, 5])
  })

  const sortDescending = sort((a, b) => b - a)

  test('accepts compare function', () => {
    expect(sortDescending(arr)).toStrictEqual([5, 4, 3, 2, 1])
  })
})
