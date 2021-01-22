import { curry } from '../lib'

describe('curry', () => {
  const sum = curry((a, b, c) => a + b + c)

  test('curries function', () => {
    expect(sum(1, 2, 3) === sum(1)(2)(3)).toStrictEqual(true)
  })
})
