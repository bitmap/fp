import { isNull } from '../lib'

describe('isNull', () => {
  test('typeof null', () => {
    expect(isNull(null)).toEqual(true)
    expect(isNull(undefined)).toEqual(false)
  })
})
