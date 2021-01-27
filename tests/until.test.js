import {
  findIndexOf,
  findIndexOfLast,
  indexOf,
  indexOfLast,
} from '../lib'

describe('until', () => {
  const arr1 = [-100, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const arr2 = [1, 20, 3, 138, 4]
  const arr3 = [138, 11, 15, 16, 9999]
  const fruit1 = ['orange', 'banana', 'pear', 'grapefruit']
  const fruit2 = ['kiwi', 'lime', 'strawberry', 'apple', 'lemon', 'apple', 'blueberry']

  const greaterThanTen = x => x > 10
  const findIndexOfGreaterThanTen = findIndexOf(greaterThanTen)
  const findIndexOfLastGreaterThanTen = findIndexOfLast(greaterThanTen)

  const indexOfApple = indexOf('apple')
  const indexOfLastApple = indexOfLast('apple')

  test('findIndexOf', () => {
    expect(findIndexOfGreaterThanTen(arr1)).toStrictEqual(-1)
    expect(findIndexOfGreaterThanTen(arr2)).toStrictEqual(1)
    expect(findIndexOfGreaterThanTen(arr3)).toStrictEqual(0)
  })

  test('findIndexOfLast', () => {
    expect(findIndexOfLastGreaterThanTen(arr1)).toStrictEqual(-1)
    expect(findIndexOfLastGreaterThanTen(arr2)).toStrictEqual(3)
    expect(findIndexOfLastGreaterThanTen(arr3)).toStrictEqual(arr3.length - 1)
  })

  test('indexOf', () => {
    expect(indexOfApple(fruit1)).toStrictEqual(-1)
    expect(indexOfApple(fruit2)).toStrictEqual(3)
  })

  test('indexOfLast', () => {
    expect(indexOfLastApple(fruit1)).toStrictEqual(-1)
    expect(indexOfLastApple(fruit2)).toStrictEqual(5)
  })
})
