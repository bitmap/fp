import { insert } from '..'

describe('insert', () => {
  const months = ['Jan', 'March', 'April', 'June']

  const monthsA = insert(1, 'Feb', months)
  const monthsB = insert(4, 'May', monthsA)
  const monthsC = insert(monthsB.length, 'Dec', monthsB)
  const monthsD = insert(-3, 'Feb', months)

  test('inserts array', () => {
    expect(monthsA).toStrictEqual(['Jan', 'Feb', 'March', 'April', 'June'])
    expect(monthsB).toStrictEqual(['Jan', 'Feb', 'March', 'April', 'May', 'June'])
    expect(monthsC).toStrictEqual(['Jan', 'Feb', 'March', 'April', 'May', 'June', 'Dec'])
    expect(monthsD).toStrictEqual(['Jan', 'Feb', 'March', 'April', 'June'])
  })

  test('no side-effects', () => {
    expect(months).toStrictEqual(['Jan', 'March', 'April', 'June'])
  })
})
