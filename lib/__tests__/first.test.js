import first from '../first'

describe('first', () => {
  const arr = [1, 2, 3, 4]

  it('returns first', () => {
    expect.assertions(1)
    expect(first(arr)).toStrictEqual(1)
  })
})
