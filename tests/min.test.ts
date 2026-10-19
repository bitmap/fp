import { min } from "../lib";
import { describe, test, expect } from "vitest";

describe("min", () => {
  test("returns minimum of all numbers", () => {
    expect(min(5, 3, 9)).toBe(3);
  });

  test("returns minimum with spread array", () => {
    const fibonacci = [0, 1, 1, 2, 3, 5, 8];
    expect(min(...fibonacci)).toBe(0);
  });

  test("handles single argument", () => {
    expect(min(10)).toBe(10);
  });

  test("throws error when called with no arguments", () => {
    expect(() => min()).toThrow("min requires at least one argument");
  });
});