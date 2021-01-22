import { split } from '../lib'

describe('split', () => {
  const string = 'I am a string'
  const splitSpaces = split(' ')

  test('splits string', () => {
    expect(splitSpaces(string)).toStrictEqual(['I', 'am', 'a', 'string'])
  })

  test('splits by delimiter', () => {
    expect(split(':', 'uno::dos:  ! ')).toStrictEqual(['uno', '', 'dos', '  ! '])
  })
})
