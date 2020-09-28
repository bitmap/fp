import { prop, pluck } from '..'

describe('pluck', () => {
  const obj = {
    fruits: ['apple', 'orange', 'banana'],
    total: 138,
  }

  it('returns pluck', () => {
    expect.assertions(1)
    expect(pluck('fruits', obj)).toStrictEqual(obj.fruits)
  })
})

describe('prop', () => {
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
