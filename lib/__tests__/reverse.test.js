import { reverse } from '..'

describe('reverse', () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  it('reverses array', () => {
    expect.assertions(1)
    expect(reverse(arr)).toStrictEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
  })
})
