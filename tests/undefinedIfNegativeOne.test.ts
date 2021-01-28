import { undefinedIfNegativeOne } from '../lib/utils/undefinedIfNegativeOne'

describe('undefinedIfNegativeOne', () => {
  test('returns undefined', () => {
    expect(undefinedIfNegativeOne(-1)).toBeUndefined()
  })
  test('returns number', () => {
    expect(undefinedIfNegativeOne(100)).toEqual(100)
  })
})
