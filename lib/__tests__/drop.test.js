import { drop, dropRight, dropFirst, dropLast } from '..'

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

describe('drop', () => {

  const drop4 = drop(4)
  const dropMost = drop(arr.length - 1)

  test('drops n', () => {
    expect(drop4(arr)).toStrictEqual([5, 6, 7, 8, 9])
    expect(dropMost(arr)).toStrictEqual([9])
  })
})

describe('dropRight', () => {
  const drop4 = dropRight(4)
  const dropMost = dropRight(arr.length - 1)

  test('drops n from right', () => {
    expect(drop4(arr)).toStrictEqual([1, 2, 3, 4, 5])
    expect(dropMost(arr)).toStrictEqual([1])
  })
})

describe('dropFirst', () => {
  test('drops first', () => {
    expect(dropFirst(arr)).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9])
  })
})

describe('dropLast', () => {
  test('drops last', () => {
    expect(dropLast(arr)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })
})
