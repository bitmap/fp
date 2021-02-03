import { excludes } from '../lib'

test('excludes', () => {
  const excludesApple = excludes('apple')
  expect(excludesApple(['kiwi', 'banana', 'apple'])).toEqual(false)
  expect(excludesApple(['kiwi', 'banana', 'grape'])).toEqual(true)
})
