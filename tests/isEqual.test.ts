import { isEqual } from "../lib";
import { describe, test, expect } from "vitest";

describe("isEqual", () => {
  test("returns true if values are equal", () => {
    const isNegativeOne = isEqual(-1);

    expect(isNegativeOne(-1)).toEqual(true);
    expect(isNegativeOne(0)).toEqual(false);
  });
});
