import reduce from '../reduce'

const juxt = (...funcs) => (...args) => reduce(
  (acc, func) => acc.concat([func(args)]), [], funcs
)

describe('juxt', () => {
  const min = nums => Math.min(...nums)
  const max = nums => Math.max(...nums)
  const avg = arr => arr.reduce((a, b) => a + b, 0) / arr.length

  const getRange = juxt(min, max, avg)

  it('returns juxtaposition', () => {
    expect.assertions(1)
    expect(getRange(2, -3, 5, 9)).toStrictEqual([-3, 9, 3.25])
  })
})
