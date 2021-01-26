import { isTypeOf } from '../lib'

describe('isTypeOf', () => {
  test('is string', () => {
    expect(isTypeOf('string', 'hello, world')).toStrictEqual(true)
    expect(isTypeOf('string', 123)).toStrictEqual(false)
  })
  test('is boolean', () => {
    expect(isTypeOf('boolean', true)).toStrictEqual(true)
    expect(isTypeOf('boolean', false)).toStrictEqual(true)
    expect(isTypeOf('boolean', 123)).toStrictEqual(false)
  })
  test('is number', () => {
    expect(isTypeOf('number', 123)).toStrictEqual(true)
    expect(isTypeOf('number', '123')).toStrictEqual(false)
    expect(isTypeOf('number', parseInt('123', 10))).toStrictEqual(true)
  })
  test('is bigint', () => {
    expect(isTypeOf('bigint', 42)).toStrictEqual(false)
    expect(isTypeOf('bigint', BigInt(42))).toStrictEqual(true)
    expect(isTypeOf('bigint', BigInt('0x1fffffffffffff'))).toStrictEqual(true)
  })
  test('is object', () => {
    expect(isTypeOf('object', {})).toStrictEqual(true)
    expect(isTypeOf('object', [])).toStrictEqual(true)
  })
  test('is symbol', () => {
    expect(isTypeOf('symbol', Symbol('symbol'))).toStrictEqual(true)
    expect(isTypeOf('symbol', 'symbol')).toStrictEqual(false)
  })
  test('is function', () => {
    expect(isTypeOf('function', () => true)).toStrictEqual(true)
    expect(isTypeOf('function', (() => false))).toStrictEqual(true)
    // eslint-disable-next-line prefer-arrow-callback
    expect(isTypeOf('function', function () { return 0 })).toStrictEqual(true)
    expect(isTypeOf('function', (() => 123)())).toStrictEqual(false)
  })
  test('is null', () => {
    expect(isTypeOf('object', null)).toStrictEqual(true)
    expect(isTypeOf('object', 0)).toStrictEqual(false)
  })
  test('is undefined', () => {
    let test
    expect(isTypeOf('undefined', test)).toStrictEqual(true)

    test = 0
    expect(isTypeOf('undefined', test)).toStrictEqual(false)
  })
})
