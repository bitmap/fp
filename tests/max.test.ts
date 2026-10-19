import { max } from "../lib";
import { describe, test, expect } from "vitest";

describe("max", () => {
  test("returns maximum of all numbers", () => {
    expect(max(5, 3, 9)).toBe(9);
  });

  test("returns maximum with spread array", () => {
    const fibonacci = [0, 1, 1, 2, 3, 5, 8];
    expect(max(...fibonacci)).toBe(8);
  });

  test("handles single argument", () => {
    expect(max(10)).toBe(10);
  });

  test("throws error when called with no arguments", () => {
    expect(() => max()).toThrow("max requires at least one argument");
  });
});