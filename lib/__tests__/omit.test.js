import { omit, map } from '..'

describe('omit', () => {

  it('returns omit', () => {
    expect.assertions(1)

    const data = {
      name: 'Tom',
      age: 32,
      city: 'New York',
      state: 'NY',
    }

    expect(omit(['name', 'age'], data)).toStrictEqual({
      city: 'New York',
      state: 'NY',
    })
  })

  it('mappable', () => {
    expect.assertions(1)

    const data = [
      {
        name: 'Tom',
        age: 32,
        city: 'New York',
        state: 'NY',
      },
      {
        name: 'Dick',
        age: 41,
        city: 'San Francisco',
        state: 'CA',
      },
      {
        name: 'Harry',
        age: 27,
        city: 'Portland',
        state: 'OR',
      },
    ]

    const omitFrom = map(omit(['name', 'city']), data)

    expect(omitFrom).toStrictEqual([
      {
        age: 32,
        state: 'NY',
      },
      {
        age: 41,
        state: 'CA',
      },
      {
        age: 27,
        state: 'OR',
      },
    ])
  })
})
