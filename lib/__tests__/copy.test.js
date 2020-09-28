import { copy } from '..'

describe('copy', () => {
  const arr = [1, 2, 3, 4]

  it('returns copy', () => {
    expect.assertions(1)
    expect(copy(arr)).toStrictEqual(arr)
  })
})
