import { map } from '..'

describe('map', () => {
  const arr = [1, 2, 3]
  const double = n => n * 2
  const doubleAll = map(double)
  const doubled = doubleAll(arr)

  it('doubles array', () => {
    expect.assertions(1)
    expect(doubled).toStrictEqual([2, 4, 6])
  })

  it('has no side effects', () => {
    expect.assertions(1)
    expect(arr).toStrictEqual([1, 2, 3])
  })
})
