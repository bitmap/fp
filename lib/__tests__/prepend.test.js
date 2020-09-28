import { prepend } from '..'

describe('prepend', () => {
  const arr = [1, 2, 3, 4]

  it('returns prepended array', () => {
    expect.assertions(1)
    expect(prepend(0, arr)).toStrictEqual([0, 1, 2, 3, 4])
  })
})
