import { split } from '..'

describe('split', () => {
  const string = 'I am a string'
  const splitSpaces = split(' ')

  it('splits string', () => {
    expect.assertions(1)
    expect(splitSpaces(string)).toStrictEqual(['I', 'am', 'a', 'string'])
  })

  it('splits by delimiter', () => {
    expect.assertions(1)
    expect(split(':', 'uno::dos:  ! ')).toStrictEqual(['uno', '', 'dos', '  ! '])
  })
})
