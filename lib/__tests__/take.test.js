import take from '../take'
import takeRight from '../takeRight'

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

describe('take', () => {

  const take4 = take(4)
  const takeMost = take(arr.length - 1)

  it('takes n', () => {
    expect.assertions(2)
    expect(take4(arr)).toStrictEqual([1, 2, 3, 4])
    expect(takeMost(arr)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })
})

describe('takeRight', () => {
  const take4 = takeRight(4)
  const takeMost = takeRight(arr.length - 1)

  it('takes n from right', () => {
    expect.assertions(2)
    expect(take4(arr)).toStrictEqual([6, 7, 8, 9])
    expect(takeMost(arr)).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9])
  })
})
