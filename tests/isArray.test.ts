import { isArray } from '../lib'

test('is array', () => {
  expect(isArray([])).toStrictEqual(true)
  expect(isArray({ length: 10 })).toStrictEqual(false)
  expect(isArray(Array.from({ length: 10 }))).toStrictEqual(true)
})
