import drop from '../drop'
import dropRight from '../dropRight'
import dropFirst from '../dropFirst'
import dropLast from '../dropLast'

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

describe('drop', () => {

  const drop4 = drop(4)
  const dropMost = drop(arr.length - 1)

  it('drops n', () => {
    expect.assertions(2)
    expect(drop4(arr)).toStrictEqual([5, 6, 7, 8, 9])
    expect(dropMost(arr)).toStrictEqual([9])
  })
})

describe('dropRight', () => {
  const drop4 = dropRight(4)
  const dropMost = dropRight(arr.length - 1)

  it('drops n from right', () => {
    expect.assertions(2)
    expect(drop4(arr)).toStrictEqual([1, 2, 3, 4, 5])
    expect(dropMost(arr)).toStrictEqual([1])
  })
})

describe('dropFirst', () => {
  it('drops first', () => {
    expect.assertions(1)
    expect(dropFirst(arr)).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9])
  })
})

describe('dropLast', () => {
  it('drops last', () => {
    expect.assertions(1)
    expect(dropLast(arr)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })
})
