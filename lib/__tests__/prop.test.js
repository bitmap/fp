import { prop } from '..'

describe('prop', () => {
  const obj = {
    fruits: ['apple', 'orange', 'banana'],
    total: 138,
  }

  it('returns prop', () => {
    expect.assertions(1)
    expect(prop('fruits', obj)).toStrictEqual(obj.fruits)
  })

  const data = {
    name: 'Bob',
    age: 40,
  }

  const name = prop('name')

  it('returns prop value', () => {
    expect.assertions(1)
    expect(name(data)).toStrictEqual('Bob')
  })

  let rename = name(data)
  rename = 'Tom'

  it('no side-effects', () => {
    expect.assertions(2)
    expect(data.name).toStrictEqual('Bob')
    expect(rename).toStrictEqual('Tom')
  })
})
