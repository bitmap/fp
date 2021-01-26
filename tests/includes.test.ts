import { includes } from '..'

test('includes', () => {
  const hasApple = includes('apple')
  expect(hasApple(['kiwi', 'banana', 'apple'])).toStrictEqual(true)
  expect(hasApple(['kiwi', 'banana', 'grape'])).toStrictEqual(false)
})
