import { isType, isArray } from '../lib'

describe('isType', () => {
  test('is string', () => {
    expect(isType('string', 'hello, world')).toStrictEqual(true)
    expect(isType('string', 123)).toStrictEqual(false)
  })
  test('is boolean', () => {
    expect(isType('boolean', true)).toStrictEqual(true)
    expect(isType('boolean', false)).toStrictEqual(true)
    expect(isType('boolean', 123)).toStrictEqual(false)
  })
  test('is number', () => {
    expect(isType('number', 123)).toStrictEqual(true)
    expect(isType('number', '123')).toStrictEqual(false)
    expect(isType('number', parseInt('123', 10))).toStrictEqual(true)
  })
  test('is object', () => {
    expect(isType('object', {})).toStrictEqual(true)
    expect(isType('object', [])).toStrictEqual(true)
  })
  test('is array', () => {
    expect(isArray([])).toStrictEqual(true)
    expect(isArray({ length: 10 })).toStrictEqual(false)
    expect(isArray(Array.from({ length: 10 }))).toStrictEqual(true)
  })
  test('is function', () => {
    expect(isType('function', () => {})).toStrictEqual(true)
    expect(isType('function', (() => {}))).toStrictEqual(true)
    // eslint-disable-next-line prefer-arrow-callback
    expect(isType('function', function () {})).toStrictEqual(true)
    expect(isType('function', (() => 123)())).toStrictEqual(false)
  })
})
