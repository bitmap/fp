import { isTypeOf } from '../lib'
import { TypeOf } from '../lib/isTypeOf'

describe('isTypeOf', () => {
  test('is string', () => {
    expect(isTypeOf(TypeOf.String, 'hello, world')).toStrictEqual(true)
    expect(isTypeOf(TypeOf.String, 123)).toStrictEqual(false)
  })
  test('is boolean', () => {
    expect(isTypeOf(TypeOf.Boolean, true)).toStrictEqual(true)
    expect(isTypeOf(TypeOf.Boolean, false)).toStrictEqual(true)
    expect(isTypeOf(TypeOf.Boolean, 123)).toStrictEqual(false)
  })
  test('is number', () => {
    expect(isTypeOf(TypeOf.Number, 123)).toStrictEqual(true)
    expect(isTypeOf(TypeOf.Number, '123')).toStrictEqual(false)
    expect(isTypeOf(TypeOf.Number, parseInt('123', 10))).toStrictEqual(true)
  })
  test('is bigint', () => {
    expect(isTypeOf(TypeOf.BigInt, 42)).toStrictEqual(false)
    expect(isTypeOf(TypeOf.BigInt, BigInt(42))).toStrictEqual(true)
    expect(isTypeOf(TypeOf.BigInt, BigInt('0x1fffffffffffff'))).toStrictEqual(true)
  })
  test('is object', () => {
    expect(isTypeOf(TypeOf.Object, {})).toStrictEqual(true)
    expect(isTypeOf(TypeOf.Object, [])).toStrictEqual(true)
  })
  test('is symbol', () => {
    expect(isTypeOf(TypeOf.Symbol, Symbol('symbol'))).toStrictEqual(true)
    expect(isTypeOf(TypeOf.Symbol, 'symbol')).toStrictEqual(false)
  })
  test('is function', () => {
    expect(isTypeOf(TypeOf.Function, () => true)).toStrictEqual(true)
    expect(isTypeOf(TypeOf.Function, (() => false))).toStrictEqual(true)
    // eslint-disable-next-line prefer-arrow-callback
    expect(isTypeOf(TypeOf.Function, function () { return 0 })).toStrictEqual(true)
    expect(isTypeOf(TypeOf.Function, (() => 123)())).toStrictEqual(false)
  })
  test('is null', () => {
    expect(isTypeOf(TypeOf.Null, null)).toStrictEqual(true)
    expect(isTypeOf(TypeOf.Null, 0)).toStrictEqual(false)
  })
  test('is undefined', () => {
    let test
    expect(isTypeOf(TypeOf.Undefined, test)).toStrictEqual(true)

    test = 0
    expect(isTypeOf(TypeOf.Undefined, test)).toStrictEqual(false)
  })
})
