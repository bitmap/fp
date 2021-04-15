import { mode } from '../lib'

describe('mode', () => {
  test('finds mode', () => {
    expect(mode(-12, 15, 30, 15, 20, 20, 20, 1.5, 9, 20, 9, -12, -12)).toEqual(20)
  })
})
