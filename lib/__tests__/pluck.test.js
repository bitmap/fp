import { pluck } from '..'

describe('pluck', () => {
  const data = [
    {
      city: 'New York',
      state: 'NY',
    },
    {
      city: 'San Francisco',
      state: 'CA',
    },
    {
      city: 'Portland',
      state: 'OR',
    },
  ]

  test('returns pluck', () => {
    expect(pluck('state', data)).toStrictEqual(['NY', 'CA', 'OR'])
  })
})
