import curry from '../curry'

describe('curry', () => {
  const sum = curry((a, b, c) => a + b + c)

  it('curries function', () => {
    expect.assertions(1)
    expect(sum(1, 2, 3) === sum(1)(2)(3)).toStrictEqual(true)
  })
})
