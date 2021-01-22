import {
  any,
  all,
  find,
  findLast,
  findIndexOf,
  findIndexOfLast,
  includes,
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
  const anyGreaterThanTen = any(greaterThanTen)
  const allGreaterThanTen = all(greaterThanTen)
  const findGreaterThanTen = find(greaterThanTen)
  const findLastGreaterThanTen = findLast(greaterThanTen)
  const findIndexOfGreaterThanTen = findIndexOf(greaterThanTen)
  const findIndexOfLastGreaterThanTen = findIndexOfLast(greaterThanTen)

  const hasApple = includes('apple')
  const indexOfApple = indexOf('apple')
  const indexOfLastApple = indexOfLast('apple')

  test('any', () => {
    expect(anyGreaterThanTen(arr1)).toStrictEqual(false)
    expect(anyGreaterThanTen(arr2)).toStrictEqual(true)
    expect(anyGreaterThanTen(arr3)).toStrictEqual(true)
  })

  test('all', () => {
    expect(allGreaterThanTen(arr1)).toStrictEqual(false)
    expect(allGreaterThanTen(arr2)).toStrictEqual(false)
    expect(allGreaterThanTen(arr3)).toStrictEqual(true)
  })

  test('find', () => {
    expect(findGreaterThanTen(arr1)).toBeUndefined()
    expect(findGreaterThanTen(arr2)).toStrictEqual(20)
    expect(findGreaterThanTen(arr3)).toStrictEqual(138)
  })

  test('findIndexOf', () => {
    expect(findIndexOfGreaterThanTen(arr1)).toStrictEqual(-1)
    expect(findIndexOfGreaterThanTen(arr2)).toStrictEqual(1)
    expect(findIndexOfGreaterThanTen(arr3)).toStrictEqual(0)
  })

  test('findLast', () => {
    expect(findLastGreaterThanTen(arr1)).toBeUndefined()
    expect(findLastGreaterThanTen(arr2)).toStrictEqual(138)
    expect(findLastGreaterThanTen(arr3)).toStrictEqual(9999)
  })

  test('findIndexOfLast', () => {
    expect(findIndexOfLastGreaterThanTen(arr1)).toStrictEqual(-1)
    expect(findIndexOfLastGreaterThanTen(arr2)).toStrictEqual(3)
    expect(findIndexOfLastGreaterThanTen(arr3)).toStrictEqual(arr3.length - 1)
  })

  test('includes', () => {
    expect(hasApple(fruit1)).toStrictEqual(false)
    expect(hasApple(fruit2)).toStrictEqual(true)
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
