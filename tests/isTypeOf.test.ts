import { isTypeOf } from '../lib'

test('is string', () => {
  expect(isTypeOf('string', 'hello, world')).toEqual(true)
  expect(isTypeOf('string', 123)).toEqual(false)
})

test('is boolean', () => {
  expect(isTypeOf('boolean', true)).toEqual(true)
  expect(isTypeOf('boolean', false)).toEqual(true)
  expect(isTypeOf('boolean', 123)).toEqual(false)
})

test('is number', () => {
  expect(isTypeOf('number', 123)).toEqual(true)
  expect(isTypeOf('number', '123')).toEqual(false)
  expect(isTypeOf('number', parseInt('123', 10))).toEqual(true)
})

test('is bigint', () => {
  expect(isTypeOf('bigint', 42)).toEqual(false)
  expect(isTypeOf('bigint', BigInt(42))).toEqual(true)
  expect(isTypeOf('bigint', BigInt('0x1fffffffffffff'))).toEqual(true)
})

test('is object', () => {
  expect(isTypeOf('object', {})).toEqual(true)
  expect(isTypeOf('object', [])).toEqual(true)
})

test('is symbol', () => {
  expect(isTypeOf('symbol', Symbol('symbol'))).toEqual(true)
  expect(isTypeOf('symbol', 'symbol')).toEqual(false)
})

test('is function', () => {
  expect(isTypeOf('function', () => true)).toEqual(true)
  expect(isTypeOf('function', (() => false))).toEqual(true)
  // eslint-disable-next-line prefer-arrow-callback
  expect(isTypeOf('function', function () { return 0 })).toEqual(true)
  expect(isTypeOf('function', (() => 123)())).toEqual(false)
})

test('is null', () => {
  expect(isTypeOf('object', null)).toEqual(true)
  expect(isTypeOf('object', 0)).toEqual(false)
})
