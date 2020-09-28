import { append } from '..'

describe('append', () => {
  const arr = [1, 2, 3, 4]

  it('returns appended array', () => {
    expect.assertions(1)
    expect(append(5, arr)).toStrictEqual([1, 2, 3, 4, 5])
  })
})
