import { includesFrom } from '..'

test('includes', () => {
  const hasApple = includesFrom(2, 'apple')
  expect(hasApple(['grape', 'kiwi', 'banana', 'apple'])).toStrictEqual(true)
  expect(hasApple(['apple', 'kiwi', 'banana', 'grape'])).toStrictEqual(false)
})
