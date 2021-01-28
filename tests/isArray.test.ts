import { isArray } from '../lib'

test('isArray', () => {
  expect(isArray([])).toEqual(true)
  expect(isArray({ length: 10 })).toEqual(false)
  expect(isArray(Array.from({ length: 10 }))).toEqual(true)
})
