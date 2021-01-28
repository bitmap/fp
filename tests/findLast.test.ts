import { findLast } from '../lib'

test('findLast', () => {
  const findGreaterThanTen = findLast(x => x > 10)

  expect(findGreaterThanTen([2, 0, 4, -9, 10, 1])).toBeUndefined()
  expect(findGreaterThanTen([0, 5, 20, 1, 5, 25])).toEqual(25)
  expect(findGreaterThanTen([138, 45, 16, 79, 1])).toEqual(79)
})
