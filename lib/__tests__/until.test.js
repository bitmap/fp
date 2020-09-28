import {
  any,
  all,
  find,
  findLast,
  findIndex,
  findLastIndex,
  includes,
  indexOf,
  indexOfLast,
} from '..'

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
  const findIndexGreaterThanTen = findIndex(greaterThanTen)
  const findLastIndexGreaterThanTen = findLastIndex(greaterThanTen)

  const hasApple = includes('apple')
  const indexOfApple = indexOf('apple')
  const indexOfLastApple = indexOfLast('apple')

  it('any', () => {
    expect.assertions(3)
    expect(anyGreaterThanTen(arr1)).toStrictEqual(false)
    expect(anyGreaterThanTen(arr2)).toStrictEqual(true)
    expect(anyGreaterThanTen(arr3)).toStrictEqual(true)
  })

  it('all', () => {
    expect.assertions(3)
    expect(allGreaterThanTen(arr1)).toStrictEqual(false)
    expect(allGreaterThanTen(arr2)).toStrictEqual(false)
    expect(allGreaterThanTen(arr3)).toStrictEqual(true)
  })

  it('find', () => {
    expect.assertions(3)
    expect(findGreaterThanTen(arr1)).toBeUndefined()
    expect(findGreaterThanTen(arr2)).toStrictEqual(20)
    expect(findGreaterThanTen(arr3)).toStrictEqual(138)
  })

  it('findIndex', () => {
    expect.assertions(3)
    expect(findIndexGreaterThanTen(arr1)).toStrictEqual(-1)
    expect(findIndexGreaterThanTen(arr2)).toStrictEqual(1)
    expect(findIndexGreaterThanTen(arr3)).toStrictEqual(0)
  })

  it('findLast', () => {
    expect.assertions(3)
    expect(findLastGreaterThanTen(arr1)).toBeUndefined()
    expect(findLastGreaterThanTen(arr2)).toStrictEqual(138)
    expect(findLastGreaterThanTen(arr3)).toStrictEqual(9999)
  })

  it('findLastIndex', () => {
    expect.assertions(3)
    expect(findLastIndexGreaterThanTen(arr1)).toStrictEqual(-1)
    expect(findLastIndexGreaterThanTen(arr2)).toStrictEqual(3)
    expect(findLastIndexGreaterThanTen(arr3)).toStrictEqual(arr3.length - 1)
  })

  it('includes', () => {
    expect.assertions(2)
    expect(hasApple(fruit1)).toStrictEqual(false)
    expect(hasApple(fruit2)).toStrictEqual(true)
  })

  it('indexOf', () => {
    expect.assertions(2)
    expect(indexOfApple(fruit1)).toStrictEqual(-1)
    expect(indexOfApple(fruit2)).toStrictEqual(3)
  })

  it('indexOfLast', () => {
    expect.assertions(2)
    expect(indexOfLastApple(fruit1)).toStrictEqual(-1)
    expect(indexOfLastApple(fruit2)).toStrictEqual(5)
  })
})
