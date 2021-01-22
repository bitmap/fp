import { flat } from '../lib'

describe('flat', () => {

  test('flattens', () => {
    expect(flat([0, [1, 2], [3, 4], [5]])).toStrictEqual([0, 1, 2, 3, 4, 5])
  })

  test('flattens 2 deep', () => {
    expect(flat([0, [1, 2, [3, 4]], [5]], 2)).toStrictEqual([0, 1, 2, 3, 4, 5])
  })

  test('flattens 3 deep', () => {
    expect(flat([0, [1, 2, [3, 4, [5]]]], 3)).toStrictEqual([0, 1, 2, 3, 4, 5])
  })


})
