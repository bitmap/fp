import { reverse } from '..'

describe('reverse', () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const str = 'I am a string'

  test('reverses array', () => {
    expect(reverse(arr)).toStrictEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
  })

  test('reverses string', () => {
    expect(reverse(str)).toStrictEqual('gnirts a ma I')
  })
})
