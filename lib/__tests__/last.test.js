import { last } from '..'

describe('last', () => {
  const arr = [1, 2, 3, 4]

  test('returns last', () => {
    expect(last(arr)).toStrictEqual(4)
  })
})
