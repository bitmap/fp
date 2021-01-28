import { flatMap } from '../lib'

describe('flatMap', () => {
  const a = [1, 2, 3, 4]
  const test1 = flatMap(x => [x, x * 2])

  const b = ['it\'s Sunny in', '', 'California']
  const test2 = flatMap(str => str.split(' '))

  const c = [5, 4, -3, 20, 17, -33, -4, 18]
  const test3 = flatMap(n => (n < 0) ? [] : (n % 2 === 0) ? [n] : [n - 1, 1])

  test('flattens', () => {
    expect(test1(a)).toEqual([1, 2, 2, 4, 3, 6, 4, 8])
  })

  test('greater than 2 is doubled', () => {
    expect(test2(b)).toEqual(['it\'s', 'Sunny', 'in', '', 'California'])
  })

  test('filter odd numbers and doubles', () => {
    expect(test3(c)).toEqual([4, 1, 4, 20, 16, 1, 18])
  })

})
