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

  it('returns pluck', () => {
    expect.assertions(1)
    expect(pluck('state', data)).toStrictEqual(['NY', 'CA', 'OR'])
  })
})
