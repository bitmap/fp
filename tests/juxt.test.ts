import { curry, reduce } from '../lib'

/**
 * Applies list of functions to a list of values. `juxt` args are curried.
 *
 * `juxt :: [(a, b) -> c] -> ((a, b) -> [c])
 */
const juxt = curry(
  (funcs: ((value: any) => any)[], list: any[]): any[] => reduce(
    (acc, func) => acc.concat([func(list)]), [], funcs,
  ),
)

describe('juxt', () => {
  const min = (nums: number[]): number => Math.min(...nums)
  const max = (nums: number[]): number => Math.max(...nums)
  const avg = (nums: number[]): number => nums.reduce((a, b) => a + b, 0) / nums.length

  const getRange = juxt([min, max, avg])

  test('returns juxtaposition', () => {
    expect(getRange([2, -3, 5, 9])).toEqual([-3, 9, 3.25])
  })
})
