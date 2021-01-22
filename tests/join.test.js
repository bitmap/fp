import { join } from '..'

describe('join', () => {
  const arr = [1, 2, 3, 4]

  test('returns joined string', () => {
    expect(join('|', arr)).toStrictEqual('1|2|3|4')
  })
})
