import { isNull } from "../lib";
import { describe, test, expect } from "vitest";

describe("isNull", () => {
  test("typeof null", () => {
    expect(isNull(null)).toEqual(true);
    expect(isNull(undefined)).toEqual(false);
  });
});
