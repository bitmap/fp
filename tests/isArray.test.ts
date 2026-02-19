import { isArray } from "../lib";
import { describe, test, expect } from "vitest";

describe("isArray", () => {
  test("returns true if value is an array", () => {
    expect(isArray([1, 2, 3])).toEqual(true);
    expect(isArray({ length: 3, 0: 1, 1: 2, 2: 3 })).toEqual(false);
    expect(isArray(Array.from({ length: 3 }, (_, i) => i + 1))).toEqual(true);
  });
});
