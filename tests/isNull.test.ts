import { isNull } from '../lib'

describe('isNull', () => {
  test('typeof null', () => {
    expect(isNull(null)).toStrictEqual(true)
    expect(isNull(undefined)).toStrictEqual(false)
  })
})
