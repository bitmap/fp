import { unique } from "../lib";
import { describe, test, expect } from "vitest";

describe("unique", () => {
  test("removes duplicates from array", () => {
    const arr = [1, 2, 2, 3, 1, 4];
    const result = unique(arr);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test("preserves order of first occurrences", () => {
    const arr = [4, 1, 5, 1, 2, 5, 3];
    const result = unique(arr);
    expect(result).toEqual([4, 1, 5, 2, 3]);
  });

  test("handles empty array", () => {
    const result = unique([]);
    expect(result).toEqual([]);
  });

  test("handles single element", () => {
    const result = unique([42]);
    expect(result).toEqual([42]);
  });

  test("handles all same elements", () => {
    const arr = [1, 1, 1, 1];
    const result = unique(arr);
    expect(result).toEqual([1]);
  });

  test("works with strings", () => {
    const arr = ["a", "b", "c", "a", "b"];
    const result = unique(arr);
    expect(result).toEqual(["a", "b", "c"]);
  });

  test("is immutable - returns new array", () => {
    const original = [1, 2, 3];
    const result = unique([1, 2, 3]);
    expect(original).toEqual([1, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
  });

  test("with multiple duplicates in middle", () => {
    const arr = [0, 1, 2, 1, 2, 2, 0];
    const result = unique(arr);
    expect(result).toEqual([0, 1, 2]);
  });

  test("handles consecutive duplicates", () => {
    const arr = [3, 3, 3, 4, 4, 5, 6, 6];
    const result = unique(arr);
    expect(result).toEqual([3, 4, 5, 6]);
  });
});
