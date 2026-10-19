import { range } from "../lib";
import { describe, test, expect } from "vitest";

describe("range", () => {
  test("generates ascending range excluding end", () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4]);
  });

  test("handles zero start and positive end", () => {
    expect(range(0, 5)).toEqual([0, 1, 2, 3, 4]);
  });

  test("handles negative start and end", () => {
    expect(range(-5, -1)).toEqual([-5, -4, -3, -2]);
  });

  test("generates descending range when start is greater than end", () => {
    expect(range(5, 0)).toEqual([5, 4, 3, 2, 1]);
  });

  test("generates descending range across zero", () => {
    expect(range(1, -2)).toEqual([1, 0, -1]);
  });

  test("returns empty array when start equals end", () => {
    expect(range(10, 10)).toEqual([]);
  });

  test("throws when start is not an integer", () => {
    expect(() => range(0.5, 3)).toThrow("range requires integer start and end values");
  });

  test("throws when end is not an integer", () => {
    expect(() => range(0, 2.5)).toThrow("range requires integer start and end values");
  });

  test("throws when values are outside the safe integer range", () => {
    expect(() => range(2 ** 53, 2 ** 53 + 2)).toThrow("range requires integer start and end values");
  });

  test("throws when start is not finite", () => {
    expect(() => range(Infinity, 0)).toThrow("range requires integer start and end values");
    expect(() => range(NaN, 0)).toThrow("range requires integer start and end values");
  });

  test("throws when end is not finite", () => {
    expect(() => range(0, Infinity)).toThrow("range requires integer start and end values");
    expect(() => range(0, -Infinity)).toThrow("range requires integer start and end values");
    expect(() => range(0, NaN)).toThrow("range requires integer start and end values");
  });

  test("use in for of loop", () => {
    let n = 0;

    for (const i of range(0, 4)) {
      n += i;
    }

    expect(n).toEqual(6);
  });
});
