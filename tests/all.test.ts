import { all } from '../lib'

test('all', () => {
  const allGreaterThanTen = all((a: number) => a > 10)

  expect(allGreaterThanTen([-5, 20, 30])).toEqual(false)
  expect(allGreaterThanTen([20, 30, 40])).toEqual(true)
})
