import { any } from "../lib";
import { describe, test, expect } from "vitest";

describe("any", () => {
  test("returns true if any item meets condition", () => {
    const anyGreaterThanTen = any((a: number) => a > 10);

    expect(anyGreaterThanTen([-25, 5, 10])).toEqual(false);
    expect(anyGreaterThanTen([10, 20, 30])).toEqual(true);
  });
});
