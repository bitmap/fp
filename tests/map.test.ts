import { map } from '../lib'

describe('map', () => {
  const arr = [1, 2, 3]
  const double = (n: number): number => n * 2
  const doubleAll = map(double)
  const doubled = doubleAll(arr)

  test('doubles array', () => {
    expect(doubled).toEqual([2, 4, 6])
  })

  test('converts type', () => {
    expect(map(x => `${x}!`)([1, 2, 3])).toEqual(['1!', '2!', '3!'])
  })
})
