import { concat, curry } from '../lib'

describe('concat', () => {
  const arr1 = [1, 2, 3, 4]
  const arr2 = [4, 5, 6, 7]
  const arr3 = ['7', '8', 9, 0]

  const curryConcat = curry(a => b => concat(a, b))
  const partial = curryConcat(arr1)

  test('concats arrays', () => {
    expect(concat(arr1)).toStrictEqual([1, 2, 3, 4])
    expect(concat(arr1, arr2)).toStrictEqual([1, 2, 3, 4, 4, 5, 6, 7])
    expect(concat(arr1, arr2, arr3)).toStrictEqual([1, 2, 3, 4, 4, 5, 6, 7, '7', '8', 9, 0])
  })

  test('concats partials', () => {
    expect(partial(arr2)).toStrictEqual([1, 2, 3, 4, 4, 5, 6, 7])
  })
})
