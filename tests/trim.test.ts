import { trim } from '../lib'

describe('trim', () => {
  test('trims string', () => {
    expect(trim('     I am a string     ')).toEqual('I am a string')
  })
})
