import { slice } from '..'

describe('slice', () => {

  const arr = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]

  const slicedA = slice(2, 8)
  const slicedB = slice(0, -5)
  const slicedC = slice(-2, arr.length)

  it('slices array', () => {
    expect.assertions(3)
    expect(slicedA(arr)).toStrictEqual([2, 3, 4, 5, 6, 7])
    expect(slicedB(arr)).toStrictEqual([0, 1, 2, 3, 4])
    expect(slicedC(arr)).toStrictEqual([8, 9])
  })

  it('equals Array.slice', () => {
    expect.assertions(3)
    expect(slicedA(arr)).toStrictEqual(arr.slice(2, 8))
    expect(slicedB(arr)).toStrictEqual(arr.slice(0, -5))
    expect(slicedC(arr)).toStrictEqual(arr.slice(-2, arr.length))
  })
})
