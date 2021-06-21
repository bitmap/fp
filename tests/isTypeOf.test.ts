import {
  isBigInt,
  isBoolean,
  isFunction,
  isNumber,
  isObject,
  isString,
  isSymbol,
  isTypeOf,
} from "../lib";

test("isTypeOf", () => {
  let $: undefined;
  expect(isTypeOf("undefined", $)).toEqual(true);
  expect(isTypeOf("string", "hello, world")).toEqual(true);
  expect(isTypeOf("number", 0x8a)).toEqual(true);
  expect(isTypeOf("boolean", false)).toEqual(true);
  expect(isTypeOf("object", [])).toEqual(true);
  expect(isTypeOf("function", () => 0x8a)).toEqual(true);
  expect(isTypeOf("symbol", Symbol("hello"))).toEqual(true);
  expect(isTypeOf("bigint", BigInt(1))).toEqual(true);
});

test("isString", () => {
  expect(isString("hello, world")).toEqual(true);
  expect(isString(0x8a)).toEqual(false);
});

test("isBoolean", () => {
  expect(isBoolean(true)).toEqual(true);
  expect(isBoolean(false)).toEqual(true);
  expect(isBoolean(0x8a)).toEqual(false);
  expect(isBoolean(0x8a > 0)).toEqual(true);
});

test("isNumber", () => {
  expect(isNumber(0x8a)).toEqual(true);
  expect(isNumber("hello, world")).toEqual(false);
});

test("isBigInt", () => {
  expect(isBigInt(BigInt(0x8a))).toEqual(true);
  expect(isBigInt(0x8a)).toEqual(false);
});

test("isObject", () => {
  expect(isObject({})).toEqual(true);
  expect(isObject([])).toEqual(true);
  expect(isObject(null)).toEqual(true);
  expect(isObject(new Map())).toEqual(true);
  expect(isObject(new Set())).toEqual(true);
  expect(isObject(0)).toEqual(false);
  expect(isObject("hello, world")).toEqual(false);
  expect(isObject(() => "hello, world")).toEqual(false);
});

test("isSymbol", () => {
  expect(isSymbol(Symbol("test"))).toEqual(true);
  expect(isSymbol("test")).toEqual(false);
});

test("isFunction", () => {
  function test(): number {
    return 0;
  }
  expect(isFunction(test)).toEqual(true);
  expect(isFunction(() => 0)).toEqual(true);
  expect(isFunction((() => 0x8a)())).toEqual(false);
  expect(isFunction({})).toEqual(false);
});
