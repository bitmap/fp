import { rejectMap } from '../lib'

describe('rejectMap', () => {
  const isEven = (n: number): boolean => n % 2 === 0
  const isOdd = (n: number): boolean => n % 2 !== 0
  const isMoreThanTwo = (n: number): boolean => n > 2
  const isTwoOrLess = (n: number): boolean => n <= 2
  const double = (x: number): number => x * 2
  const a = [1, 2, 3, 4]

  const test1 = rejectMap(isOdd, double)
  const test2 = rejectMap(isEven, double)
  const test3 = rejectMap(isMoreThanTwo, double)
  const test4 = rejectMap(isTwoOrLess, double)

  test('filter even numbers and doubles', () => {
    expect(test1(a)).toEqual([4, 8])
  })

  test('filter odd numbers and doubles', () => {
    expect(test2(a)).toEqual([2, 6])
  })

  test('greater than 2 is doubled', () => {
    expect(test3(a)).toEqual([2, 4])
  })

  test('less than 2 is doubled', () => {
    expect(test4(a)).toEqual([6, 8])
  })
})
