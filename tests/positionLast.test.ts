import { positionLast } from '../lib'

describe('positionLast', () => {
  test('finds last index', () => {
    expect(positionLast('apple', ['banana', 'orange', 'kiwi', 'grape'])).toBeUndefined()
    expect(positionLast('apple', ['banana', 'strawberry', 'apple', 'kiwi'])).toEqual(2)
  })

  test('finds index with predicate', () => {
    expect(positionLast((x: number) => x > 10, [0, 1, 10, 2, 5, 4.5])).toBeUndefined()
    expect(positionLast((x: number) => x > 10, [0, 5, 20, 5, 15, 45])).toEqual(5)
  })
})
