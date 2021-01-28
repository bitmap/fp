import { includes } from '../lib'

test('includes', () => {
  const hasApple = includes('apple')
  expect(hasApple(['kiwi', 'banana', 'apple'])).toEqual(true)
  expect(hasApple(['kiwi', 'banana', 'grape'])).toEqual(false)
})
