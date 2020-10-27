import { flat } from '..'

describe('flat', () => {

  it('flattens', () => {
    expect.assertions(1)
    expect(flat([0, [1, 2], [3, 4], [5]])).toStrictEqual([0, 1, 2, 3, 4, 5])
  })

  it('flattens 2 deep', () => {
    expect.assertions(1)
    expect(flat([0, [1, 2, [3, 4]], [5]], 2)).toStrictEqual([0, 1, 2, 3, 4, 5])
  })

  it('flattens 3 deep', () => {
    expect.assertions(1)
    expect(flat([0, [1, 2, [3, 4, [5]]]], 3)).toStrictEqual([0, 1, 2, 3, 4, 5])
  })


})
