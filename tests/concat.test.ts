import { concat, curry } from '../lib'

describe('concat', () => {
  const arr1 = [1, 2, 3, 4]
  const arr2 = [4, 5, 6, 7]
  const arr3 = ['7', '8', 9, 0]

  const curryConcat = curry(a => b => concat(a, b))
  const partial = curryConcat(arr1)

  test('concats lists', () => {
    expect(concat(arr1)).toEqual([1, 2, 3, 4])
    expect(concat(arr1, arr2)).toEqual([1, 2, 3, 4, 4, 5, 6, 7])
    expect(concat(arr1, arr2, arr3)).toEqual([1, 2, 3, 4, 4, 5, 6, 7, '7', '8', 9, 0])
  })

  test('concats partials', () => {
    expect(partial(arr2)).toEqual([1, 2, 3, 4, 4, 5, 6, 7])
  })
})
