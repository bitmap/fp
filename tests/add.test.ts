import { add } from '../lib'

describe('add', () => {
  test('adds two numbers', () => {
    expect(add(15, 30)).toEqual(45)
  })

  test('adds partial function', () => {
    const add5 = add(5)
    expect(add5(95)).toEqual(100)
    expect(add5(-5)).toEqual(0)
  })
})
