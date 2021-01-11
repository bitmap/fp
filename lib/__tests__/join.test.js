import { join } from '..'

describe('join', () => {
  const arr = [1, 2, 3, 4]

  it('returns joined string', () => {
    expect.assertions(1)
    expect(join('|', arr)).toStrictEqual('1|2|3|4')
  })
})
