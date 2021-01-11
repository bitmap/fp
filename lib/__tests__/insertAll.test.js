import { insertAll } from '..'

describe('insertAll', () => {
  const months = ['Jan', 'June']
  const others = ['Feb', 'March', 'April', 'May']

  const allMonths = insertAll(1, others, months)

  test('inserts array', () => {
    expect(allMonths).toStrictEqual(['Jan', 'Feb', 'March', 'April', 'May', 'June'])
  })

  test('no side-effects', () => {
    expect(months).toStrictEqual(['Jan', 'June'])
  })
})
