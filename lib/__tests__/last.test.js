import last from '../last'

describe('last', () => {
  const arr = [1, 2, 3, 4]

  it('returns last', () => {
    expect.assertions(1)
    expect(last(arr)).toStrictEqual(4)
  })
})
