import { any } from '..'

test('any', () => {
  const anyGreaterThanTen = any(a => a > 10)

  expect(anyGreaterThanTen([-25, 5, 10])).toStrictEqual(false)
  expect(anyGreaterThanTen([10, 20, 30])).toStrictEqual(true)
})
