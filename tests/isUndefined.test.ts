import { isUndefined } from '../lib'

test('isUndefined', () => {
  let test: string | undefined
  expect(isUndefined(test)).toEqual(true)

  test = 'test'
  expect(isUndefined(test)).toEqual(false)
})
