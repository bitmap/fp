import { first } from '..'

describe('first', () => {
  const arr = [1, 2, 3, 4]

  test('returns first', () => {
    expect(first(arr)).toStrictEqual(1)
  })
})
