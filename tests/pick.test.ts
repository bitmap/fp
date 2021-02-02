import { pick, map } from '../lib'

interface User {
  name: string
  age?: number
  city?: string
  state?: string
}

describe('pick', () => {

  test('returns pick', () => {

    const data: User = {
      name: 'Tom',
      age: 32,
      city: 'New York',
      state: 'NY',
    }

    expect(pick(['name', 'age'], data)).toEqual({
      name: 'Tom',
      age: 32,
    })
  })

  test('mappable', () => {

    const data: User[] = [
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

    expect(pickFrom).toEqual([
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
