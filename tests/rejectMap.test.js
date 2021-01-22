import { rejectMap } from '../lib'

describe('rejectMap', () => {
  const isEven = n => n % 2 === 0
  const isOdd = n => n % 2 !== 0
  const isMoreThanTwo = n => n > 2
  const isTwoOrLess = n => n <= 2
  const double = x => x * 2
  const a = [1, 2, 3, 4]

  const test1 = rejectMap(isOdd, double)
  const test2 = rejectMap(isEven, double)
  const test3 = rejectMap(isMoreThanTwo, double)
  const test4 = rejectMap(isTwoOrLess, double)

  test('filter even numbers and doubles', () => {
    expect(test1(a)).toStrictEqual([4, 8])
  })

  test('filter odd numbers and doubles', () => {
    expect(test2(a)).toStrictEqual([2, 6])
  })

  test('greater than 2 is doubled', () => {
    expect(test3(a)).toStrictEqual([2, 4])
  })

  test('less than 2 is doubled', () => {
    expect(test4(a)).toStrictEqual([6, 8])
  })
})
