import pluck from '../pluck'

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
