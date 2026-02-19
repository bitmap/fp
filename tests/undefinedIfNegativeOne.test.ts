import { undefinedIfNegativeOne } from "../lib/utils/undefinedIfNegativeOne";
import { describe, test, expect } from "vitest";

describe("undefinedIfNegativeOne", () => {
  test("returns undefined", () => {
    expect(undefinedIfNegativeOne(-1)).toBeUndefined();
  });
  test("returns number", () => {
    expect(undefinedIfNegativeOne(100)).toEqual(100);
  });
});
