import { map } from '..'

describe('map', () => {
  const arr = [1, 2, 3]
  const double = n => n * 2
  const doubleAll = map(double)
  const doubled = doubleAll(arr)

  test('doubles array', () => {
    expect(doubled).toStrictEqual([2, 4, 6])
  })

  test('has no side effects', () => {
    expect(arr).toStrictEqual([1, 2, 3])
  })
})
