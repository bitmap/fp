import { sort } from '..'

describe('sort', () => {
  const arr = [4, 2, 3, 1, 5]

  const sortAscending = sort((a, b) => a - b)

  it('returns sorted array', () => {
    expect.assertions(1)
    expect(sortAscending(arr)).toStrictEqual([1, 2, 3, 4, 5])
  })

  const sortDescending = sort((a, b) => b - a)

  it('accepts compare function', () => {
    expect.assertions(1)
    expect(sortDescending(arr)).toStrictEqual([5, 4, 3, 2, 1])
  })
})
