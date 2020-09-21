import splice from '../splice'

describe('slice', () => {
  const months = ['Jan', 'March', 'April', 'June']

  const monthsA = splice(months, 1, 0, 'Feb')
  const monthsB = splice(monthsA, 4, 0, 'May')
  const monthsC = splice(monthsB, 1, monthsB.length, 'Dec')
  const monthsD = splice(months, -3, -1, 'Feb')

  it('splices array', () => {
    expect.assertions(4)
    expect(monthsA).toStrictEqual(['Jan', 'Feb', 'March', 'April', 'June'])
    expect(monthsB).toStrictEqual(['Jan', 'Feb', 'March', 'April', 'May', 'June'])
    expect(monthsC).toStrictEqual(['Jan', 'Dec'])
    expect(monthsD).toStrictEqual(['Jan', 'Feb', 'March', 'April', 'June'])
  })

  it('no side-effects', () => {
    expect.assertions(1)
    expect(months).toStrictEqual(['Jan', 'March', 'April', 'June'])
  })
})
