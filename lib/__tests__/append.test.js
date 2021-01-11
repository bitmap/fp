import { append } from '..'

describe('append', () => {
  const arr = [1, 2, 3, 4]

  test('returns appended array', () => {
    expect(append(5, arr)).toStrictEqual([1, 2, 3, 4, 5])
  })
})
