import { position } from '../lib'

describe('position', () => {
  test('finds index', () => {
    expect(position('apple', ['banana', 'orange', 'kiwi', 'grape'])).toBeUndefined()
    expect(position('apple', ['banana', 'strawberry', 'apple', 'kiwi'])).toEqual(2)
  })

  test('finds index with predicate', () => {
    expect(position((x: number) => x > 10, [0, 1, 10, 2, 5, 4.5])).toBeUndefined()
    expect(position((x: number) => x > 10, [0, 5, 20, 5, 15, 45])).toEqual(2)
  })
})
