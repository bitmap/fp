import { find } from '../lib'

test('find', () => {
  const findGreaterThanTen = find((x: number) => x > 10)

  expect(findGreaterThanTen([2, 0, 4, -9, 10, 1])).toBeUndefined()
  expect(findGreaterThanTen([0, 5, 20, 1, 5, 25])).toEqual(20)
  expect(findGreaterThanTen([138, 45, 16, 79, 1])).toEqual(138)
})
