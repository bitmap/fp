import { copy } from '../lib'

describe('copy', () => {
  const arr = [1, 2, 3, 4]

  test('returns copy', () => {
    expect(copy(arr)).toStrictEqual(arr)
  })
})
