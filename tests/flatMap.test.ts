import { flatMap } from '../lib'

describe('flatMap', () => {
  test('flattens and doubles', () => {
    const a = [1, 2, 3, 4]
    const flatten = flatMap((x: number) => [x, x * 2])
    expect(flatten(a)).toEqual([1, 2, 2, 4, 3, 6, 4, 8])
  })

  test('filter odd numbers and doubles', () => {
    const a = [5, 4, -3, 20, 17, -33, -4, 18]
    const flatten = flatMap(n => (n < 0) ? [] : (n % 2 === 0) ? [n] : [n - 1, 1])
    expect(flatten(a)).toEqual([4, 1, 4, 20, 16, 1, 18])
  })
})
