import { append } from '../lib'

describe('append', () => {
  const arr = [1, 2, 3, 4]

  test('returns appended array', () => {
    expect(append(5, arr)).toEqual([1, 2, 3, 4, 5])
  })
})
