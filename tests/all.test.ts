import { all } from '..'

test('all', () => {
  const allGreaterThanTen = all(a => a > 10)

  expect(allGreaterThanTen([-5, 20, 30])).toStrictEqual(false)
  expect(allGreaterThanTen([20, 30, 40])).toStrictEqual(true)
})
