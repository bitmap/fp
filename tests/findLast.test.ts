import { findLast } from '..'

test('findLast', () => {
  const findGreaterThanTen = findLast(x => x > 10)

  expect(findGreaterThanTen([2, 0, 4, -9, 10, 1])).toBeUndefined()
  expect(findGreaterThanTen([0, 5, 20, 1, 5, 25])).toStrictEqual(25)
  expect(findGreaterThanTen([138, 45, 16, 79, 1])).toStrictEqual(79)
})
