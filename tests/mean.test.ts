import { mean } from '../lib'

describe('mean', () => {
  test('finds mean (average)', () => {
    expect(mean(15, 30, 15, 20, 1.5, 9, -12)).toEqual(78.5 / 7)
  })

  test('finds mean of spread array', () => {
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    expect(mean(...fibonacci)).toEqual(8.8)
  })
})
