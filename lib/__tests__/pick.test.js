import { pick, map } from '..'

describe('pick', () => {

  it('returns pick', () => {
    expect.assertions(1)

    const data = {
      name: 'Tom',
      age: 32,
      city: 'New York',
      state: 'NY',
    }

    expect(pick(['name', 'age'], data)).toStrictEqual({
      name: 'Tom',
      age: 32,
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
      {
        name: 'Jim',
      },
    ]

    const pickFrom = map(pick(['name', 'city']), data)

    expect(pickFrom).toStrictEqual([
      {
        name: 'Tom',
        city: 'New York',
      },
      {
        name: 'Dick',
        city: 'San Francisco',
      },
      {
        name: 'Harry',
        city: 'Portland',
      },
      {
        name: 'Jim',
      },
    ])
  })
})
