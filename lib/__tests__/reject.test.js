import reject from '../reject'

describe('reject', () => {
  const isEven = n => n % 2 === 0
  const isOdd = n => n % 2 !== 0
  const rejectEven = reject(isOdd)
  const rejectOdd = reject(isEven)
  const odds = rejectEven([1, 2, 3, 4])
  const evens = rejectOdd([1, 2, 3, 4])

  it('rejects odd numbers', () => {
    expect.assertions(1)
    expect(odds).toStrictEqual([2, 4])
  })

  it('rejects even numbers', () => {
    expect.assertions(1)
    expect(evens).toStrictEqual([1, 3])
  })
})
