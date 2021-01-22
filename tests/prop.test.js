import { prop } from '..'

describe('prop', () => {
  const obj = {
    fruits: ['apple', 'orange', 'banana'],
    total: 138,
  }

  test('returns prop', () => {
    expect(prop('fruits', obj)).toStrictEqual(obj.fruits)
  })

  const data = {
    name: 'Bob',
    age: 40,
  }

  const name = prop('name')

  test('returns prop value', () => {
    expect(name(data)).toStrictEqual('Bob')
  })

  let rename = name(data)
  rename = 'Tom'

  test('no side-effects', () => {
    expect(data.name).toStrictEqual('Bob')
    expect(rename).toStrictEqual('Tom')
  })
})
