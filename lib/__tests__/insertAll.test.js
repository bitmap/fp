import { insertAll } from '..'

describe('insertAll', () => {
  const months = ['Jan', 'June']
  const others = ['Feb', 'March', 'April', 'May']

  const allMonths = insertAll(1, others, months)

  it('inserts array', () => {
    expect.assertions(1)
    expect(allMonths).toStrictEqual(['Jan', 'Feb', 'March', 'April', 'May', 'June'])
  })

  it('no side-effects', () => {
    expect.assertions(1)
    expect(months).toStrictEqual(['Jan', 'June'])
  })
})
