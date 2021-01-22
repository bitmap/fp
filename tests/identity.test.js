import { identity } from '../lib'

describe('identity', () => {
  test('return identity', () => {
    expect(identity('hello, world')).toStrictEqual('hello, world')
  })
})
