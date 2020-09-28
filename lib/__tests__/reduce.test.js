import { reduce } from '..'

const arr = [...Array(100).keys()]
const reducer = (acc, n) => acc + n
const sum = reduce(reducer, 0)
const result = sum(arr)

describe('reduce', () => {
  it('reduces array', () => {
    expect.assertions(1)
    expect(result).toStrictEqual(4950)
  })
})
